## Asteroid api

## Getting Started

First, build and run the development server:

```bash
npm run start
# or
yarn start
```

## Project structure

- The folder `/src` contain source code
- The folder `/src/app/` contain controllers, repositories, and services, try to divede in domain following [DDD](https://medium.com/@jonathanloscalzo/domain-driven-design-principios-beneficios-y-elementos-primera-parte-aad90f30aa35)
- The folder `/src/config/` has the config of api ej database keys or api keys
- The folder `/src/routes/` has router for each Domain
- The folder `/src/shared` has resources used for all app
- Finally the index.ts file is the root of aplication

## Endponts

- list favourites by user id `/api/v1/favourties/users/1001`
