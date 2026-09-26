import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smarttech.accountmaster',
  appName: 'Login Smart Technology Ledger',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
