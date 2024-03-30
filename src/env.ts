import { z } from 'zod'

const envVariables = z.object({
  DATABASE_URL: z.string(),
  AUTH_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  MERCADOPAGO_ACCESS_TOKEN: z.string(),
  MERCADOPAGO_WEBHOOK_SECRET: z.string(),
  APP_URL: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> { }
  }
}
