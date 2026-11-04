# Portafolio de Eddier Soto Vargas

Versión del portafolio preparada para Hostinger, con MotoApex, TechSeed y HeyPoint, resultados históricos y detalles de seguridad y pruebas en español e inglés.

## Build

- Instalar dependencias: `npm ci`
- Compilar: `npm run build`
- Directorio de publicación: `dist/`

Se conserva el build de Hostinger con `vite.config.mjs` y `--configLoader native`, además de las versiones actualizadas de React Router y Vite. El lockfile fija las dependencias utilizadas.

## Publicación y contacto

Publicar el contenido de `dist/` en un alojamiento que sirva archivos estáticos y ejecute PHP 8 o posterior. El build copia también `public/contact.php`, su configuración y el favicon. No publicar `src/` ni `node_modules/`.

El destinatario está fijado en `eddiersoto@outlook.com`. Antes de usar el formulario, configurar un buzón real del dominio como `sender_email` en `contact-config.php` del hosting. Conservar la configuración existente al actualizar. La configuración incluida es una plantilla sin credenciales y no habilita por sí sola el envío.

Un servicio exclusivamente Node.js/estático que no ejecute PHP puede mostrar la web, pero no enviar el formulario. La recepción real en Outlook debe comprobarse desde el alojamiento con PHP y su servicio de correo habilitado.

Los resultados de seguridad publicados describen revisiones históricas de los proyectos, no una certificación del entorno actual.
