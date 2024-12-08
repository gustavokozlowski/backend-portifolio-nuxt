import env from 'env-var'

const config = {
  port: env.get('PORT').required().asInt()
}

export default config