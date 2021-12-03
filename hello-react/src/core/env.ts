type EnvVars = {
    isDev: boolean,
    environment: 'test' | 'dev' | 'prod'
    appName: string,
    token: string
};
type EnvironmentVariable = keyof EnvVars;

export const ENV =
                 {
                     isDev:       process.env.REACT_APP_ENVIRONMENT === 'dev',
                     environment: process.env.REACT_APP_ENVIRONMENT,
                     appName:     'hello-ender',
                     token:       process.env.REACT_APP_TOKEN ?? '',
                 } as EnvVars;

export function useEnvironmentVariable(which: EnvironmentVariable) {
    return ENV[which];
}
