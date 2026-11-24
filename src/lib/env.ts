/**
 * Validação centralizada de variáveis de ambiente.
 * Regra de Segurança: As credenciais do Back4App rodam EXCLUSIVAMENTE no servidor,
 * prevenindo exposição de chaves no bundle público do cliente (browser).
 */
export const serverEnv = {
  BACK4APP_APP_ID: process.env.BACK4APP_APP_ID ?? '',
  BACK4APP_REST_API_KEY: process.env.BACK4APP_REST_API_KEY ?? '',
  BACK4APP_API_URL:
    process.env.BACK4APP_API_URL ?? 'https://parseapi.back4app.com',
};

export function isBack4AppConfigured(): boolean {
  return Boolean(
    serverEnv.BACK4APP_APP_ID && serverEnv.BACK4APP_REST_API_KEY
  );
}
