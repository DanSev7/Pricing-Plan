const ENV = {
  development: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.6:5000/api', // Your actual IP address with protocol
  },
  production: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL || 'https://api.ethiotechleaders.com/api',
  },
};

const getEnvVars = () => {
  // Detect the environment
  const env = process.env.NODE_ENV || 'development';
  return ENV[env as keyof typeof ENV];
};

export default getEnvVars();