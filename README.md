# Vexara: Bershka ecommerce clone

Clone of Bershka's ecommerce implementing the main functionalities such as the authentication flow using auth.js, the product payment flow using the Mercadopago payment gateway, laying out the app as similar as possible, adding the responsive without using js (which is like is done originally), deploying 100% functional code to production.

## Preview

![vexara-preview](https://github.com/dresandev/vexara/assets/79766563/5db1dbb3-080e-4110-bbbe-b338574d1ec6)

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
