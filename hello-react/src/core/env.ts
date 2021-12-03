type EnvVars = {
    isDev: boolean,
    appName: string,
    token: string
};
type EnvironmentVariable = keyof EnvVars;

export const ENV =
                 {
                     isDev:   process.env.REACT_APP_ENVIRONMENT === 'dev',
                     appName: 'hello-ender',
                     token:   process.env.REACT_APP_TOKEN ?? '',
                 } as EnvVars;

export function useEnvironmentVariable(which: EnvironmentVariable) {
    return ENV[which];
}
