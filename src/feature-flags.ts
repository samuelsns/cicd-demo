/**
 * Feature flags configuration for the calculator application
 */

// Define available features
export interface FeatureFlags {
  enableDivision: boolean;
  // Add more feature flags here as needed
}

// Default configuration
const defaultFeatureFlags: FeatureFlags = {
  enableDivision: true,
};

// Environment-based configuration
export function getFeatureFlags(): FeatureFlags {
  // Read from environment variables if available
  const enableDivision = process.env.ENABLE_DIVISION !== 'false';
  
  return {
    ...defaultFeatureFlags,
    enableDivision,
  };
}

// Singleton instance for the application
export const featureFlags = getFeatureFlags();
