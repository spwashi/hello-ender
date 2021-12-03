type EnvVars = {
    isDev: boolean,
    appName: string,
    token: string
};
type EnvironmentVariable = keyof EnvVars;

console.log(process.env.REACT_APP_TOKEN);
export const ENV =
                 {
                     isDev:   true,
                     appName: 'hello-ender',
                     token:   process.env.REACT_APP_TOKEN ?? '',
                 } as EnvVars;

export function useEnvironmentVariable(which: EnvironmentVariable) {
    return ENV[which];
}
