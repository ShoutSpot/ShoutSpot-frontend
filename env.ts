// env.ts
function getEnvVar(name: string): string {
    const value = process.env[name];
    if (typeof value === 'undefined') {
      throw new Error(`Environment variable ${name} is missing`);
    }
    return value;
  }
  
  export const URL = getEnvVar('URL');
  