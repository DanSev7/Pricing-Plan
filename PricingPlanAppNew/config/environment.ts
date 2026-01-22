const ENV = {
  development: {
    apiUrl: 'https://api.ethiotechleaders.com/api', // Use production by default
  },
  production: {
    apiUrl: 'https://api.ethiotechleaders.com/api',
  },
};

const getEnvVars = () => {
  // Detect the environment
  // In Expo, we can detect development vs production in several ways
  
  // Method 1: Check if we're in a development environment
  // In Expo development, NODE_ENV is typically 'development' or undefined
  // In Expo production builds, NODE_ENV is typically 'production'
  const nodeEnv = process.env.NODE_ENV || 'development';
  console.log('NODE_ENV:', nodeEnv);
  
  // Method 2: Check if we're in development based on NODE_ENV
  const isDevelopment = nodeEnv !== 'production';
  console.log('Is Development:', isDevelopment);
  
  // Method 3: If EXPO_PUBLIC_API_URL is explicitly set, use it (allows overriding)
  if (process.env.EXPO_PUBLIC_API_URL) {
    console.log('Overriding with EXPO_PUBLIC_API_URL:', process.env.EXPO_PUBLIC_API_URL);
    return { apiUrl: process.env.EXPO_PUBLIC_API_URL };
  }
  
  // Method 4: Use environment-specific config
  const envKey = isDevelopment ? 'development' : 'production';
  console.log('Using environment config:', envKey);
  
  return ENV[envKey as keyof typeof ENV];
};

export default getEnvVars();