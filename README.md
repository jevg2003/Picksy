# Picksy

## Resumen

Prototipo de tienda en Astro y React. Presenta un catálogo conectado a una API, navegación por categorías, búsqueda y un carrusel de productos adaptable a móvil.

## Cómo está organizado

- [src/pages/index.astro](src/pages/index.astro) compone el catálogo, el carrusel y la navegación.
- [src/components](src/components) contiene los filtros, el buscador, las tarjetas y el menú móvil.
- [src/services/api](src/services/api) consulta productos y categorías. El catálogo requiere que esa API esté disponible.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Para compilar, usa `pnpm build`. Los scripts disponibles están en [package.json](package.json).

## English summary

An Astro and React storefront prototype with an API-backed catalog, category navigation, search, and a responsive product carousel.
