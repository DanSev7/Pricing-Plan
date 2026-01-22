import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { hasSeenOnboarding } from '../utils/onboardingHelper';

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        console.log('Checking onboarding status...');
        const hasSeen = await hasSeenOnboarding();
        console.log('Has seen onboarding:', hasSeen);
        if (hasSeen) {
          // User has seen onboarding, go to main tabs
          console.log('Redirecting to tabs...');
          router.replace('/(tabs)');
        } else {
          // User hasn't seen onboarding, show onboarding
          console.log('Redirecting to onboarding...');
          router.replace('/onboarding');
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        // In case of error, default to main tabs
        console.log('Error occurred, redirecting to tabs...');
        router.replace('/(tabs)');
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#09b6d4" />
      </View>
    );
  }

  // This screen will redirect immediately, so we don't need to render anything
  return null;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172b',
  },
});