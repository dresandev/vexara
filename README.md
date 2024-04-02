# Vexara: Bershka ecommerce clone

Bershka clone implementing the main functionalities such as authentication flow using auth.js, product payment flow using mercadopago, implementing code that can work for production but in the end everything is in development mode despite being deployed in production.
So far there is only one problem that I do not have much control over because the problem occurs in auth.js, I hope it will be solved soon.

## Preview

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.* file.

`DATABASE_URL`
`AUTH_SECRET`
`GITHUB_CLIENT_ID`
`GITHUB_CLIENT_SECRET`
`MERCADOPAGO_ACCESS_TOKEN`
`MERCADOPAGO_WEBHOOK_SECRET`
`APP_URL`

These environment variables are under my specific requirements, you can modify them as needed.

## Set the database/orm (prisma)

To sync with remote database run

```bash
  cd vexara
  # or the name you gave the project when cloning the repository
  yarn dlx prisma db push
  # or
  pnpm dlx prisma db push
  # or
  npx prisma db push
```

To generate the models and typing of the database

```bash
  yarn dlx prisma generate
  # or
  pnpm dlx prisma generate
  # or
  npx prisma generate
```

To have data to interact with in the application, run the following command

```bash
  yarn seed
  # or
  pnpm seed
  # or
  npm seed
```

## Run seed command

To have data to interact with in the application, run the following command

```bash
  yarn seed
  # or
  pnpm seed
  # or
  npm seed
```

## Run development server

After setting environment variables, you can start the development server by running the following commands

```bash
  cd vexara
  # or the name you gave the project when cloning the repository
  yarn dev
  # or
  pnpm dev
  # or
  npm dev
```
