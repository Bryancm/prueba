# Prueba

Prueba frontend para mostrar una lista de usuarios y su perfil.

## Tech Stack

El proyecto fue inicializado utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [NextJS](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [DummyAPI](https://dummyapi.io)

## Variables de entorno

Para ejecutar este proyecto necesitas agregar las siquientes variables de entorno:

`API_ID`

## Estructura de archivos

    ├── api                     # Funciones para llamar a DummyAPI
    ├── components              # Componentes UI
    ├── hooks                   # Hooks personalizados (en este caso para la paginación)
    ├── pages                   # Paginas a mostrar y navegación
    ├── public                  # Recursos publicos
    ├── styles                  # Estilos (directivas tailwindcss)
    ├── util                    # Funciones útiles (formatear fecha, filtros, etc)
    ├── types.ts                # Declaración de tipos
    ├── next.config.js          # Configuración NextJS
    ├── tailwind.config.js      # Configuración TailwindCSS
    └── README.md

## Instalación

```bash
  npm install // instalar dependencias
  npm run dev // ejecutar servidor de desarrollo
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## Deployment

Este proyecto fue subido a [Vercel](https://vercel.com), puedes dar [click aquí](https://nextjs.org/docs/deployment) para conocer más sobre como subir un proyecto a esta plataforma.
