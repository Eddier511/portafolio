<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function finish(int $status, bool $ok): void { http_response_code($status); echo json_encode(['ok' => $ok]); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Allow: POST'); finish(405, false); }
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 50000) finish(413, false);
function field(string $key): string { $v = $_POST[$key] ?? ''; return is_string($v) ? trim($v) : ''; }
if (field('website') !== '') finish(400, false);
$name = field('name'); $email = field('email'); $service = field('service'); $project = field('project'); $language = field('language');
if ($name === '' || strlen($name) > 480 || preg_match('/[\r\n]/', $name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 || preg_match('/[\r\n]/', $email) || $service === '' || strlen($service) > 600 || $project === '' || strlen($project) > 40000 || !in_array($language, ['es', 'en'], true)) finish(422, false);
// Limit repeated submissions per IP. No contact details are stored here.
$rateFile = sys_get_temp_dir() . '/portfolio-contact-' . hash('sha256', __DIR__ . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$lock = @fopen($rateFile, 'c+');
if (!$lock || !flock($lock, LOCK_EX)) finish(503, false);
$last = (int)stream_get_contents($lock);
if (time() - $last < 60) { flock($lock, LOCK_UN); fclose($lock); finish(429, false); }
ftruncate($lock, 0); rewind($lock); fwrite($lock, (string)time()); flock($lock, LOCK_UN); fclose($lock);
$config = require __DIR__ . '/contact-config.php';
$sender = $config['sender_email'] ?? '';
if (!filter_var($sender, FILTER_VALIDATE_EMAIL) || str_contains($sender, "\r") || str_contains($sender, "\n")) finish(503, false);
function escape(string $v): string { return htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
$rows = '';
foreach (['Nombre' => $name, 'Correo electrónico' => $email, 'Servicio solicitado' => $service, 'Idioma' => $language === 'es' ? 'Español' : 'English', 'Fecha (Costa Rica)' => (new DateTimeImmutable('now', new DateTimeZone('America/Costa_Rica')))->format('d/m/Y H:i:s')] as $label => $value) {
    $rows .= '<tr><td style="padding:14px 20px;color:#8b97ad;border-bottom:1px solid #253047;width:34%">'.escape($label).'</td><td style="padding:14px 20px;color:#f4f7ff;border-bottom:1px solid #253047;word-break:break-word">'.escape($value).'</td></tr>';
}
$html = '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;background:#070a12;font-family:Arial,sans-serif;color:#f4f7ff"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#070a12"><tr><td align="center" style="padding:36px 16px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#0d1220;border:1px solid #253047;border-radius:16px"><tr><td style="padding:32px;border-top:4px solid #3388ff"><p style="margin:0 0 14px;color:#3388ff;font-size:12px;letter-spacing:3px">PORTFOLIO · NUEVO CONTACTO</p><h1 style="margin:0;font-size:28px;color:#f4f7ff">Hablemos de tu próximo proyecto.</h1><p style="color:#8b97ad;line-height:1.6">Has recibido una solicitud desde el sitio web de Eddier Soto Vargas.</p></td></tr><tr><td style="padding:0 12px"><table width="100%" cellspacing="0" cellpadding="0" style="font-size:14px">'.$rows.'</table></td></tr><tr><td style="padding:28px 32px"><h2 style="font-size:16px;color:#3388ff">Mensaje / detalles del proyecto</h2><div style="font-size:15px;line-height:1.8;color:#f4f7ff;white-space:pre-wrap;word-break:break-word">'.escape($project).'</div><p style="margin-top:28px"><a href="mailto:'.escape($email).'" style="display:inline-block;background:#3388ff;color:#ffffff;padding:14px 24px;border-radius:8px;text-decoration:none;font-weight:bold">Responder a '.escape($name).'</a></p></td></tr><tr><td style="padding:20px 32px;border-top:1px solid #253047;color:#8b97ad;font-size:12px">Eddier Soto Vargas · Fullstack Engineer<br>El botón Responder de tu correo también contacta directamente al remitente.</td></tr></table></td></tr></table></body></html>';
$plain = "Nuevo contacto del portfolio\n\nNombre: $name\nEmail: $email\nServicio: $service\nIdioma: $language\n\nMensaje:\n$project";
$boundary = 'portfolio_' . bin2hex(random_bytes(16));
$headers = ['From: Eddier Soto Portfolio <'.$sender.'>', 'Reply-To: '.$email, 'MIME-Version: 1.0', 'Content-Type: multipart/alternative; boundary="'.$boundary.'"'];
$body = '--'.$boundary."\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n".chunk_split(base64_encode($plain)).'--'.$boundary."\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n".chunk_split(base64_encode($html)).'--'.$boundary."--\r\n";
$subject = '=?UTF-8?B?'.base64_encode('Nuevo contacto · '.$service).'?=';
$ok = @mail('eddiersoto@outlook.com', $subject, $body, implode("\r\n", $headers));
if (!$ok) { error_log('Portfolio contact: hosting mail transport failed.'); finish(502, false); }
finish(200, true);
