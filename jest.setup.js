jest.mock('next/config', () => () => ({
  publicRuntimeConfig: { apiEndpoint: process.env.API_ENDPOINT },
}))
