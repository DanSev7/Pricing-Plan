import AsyncStorage from '@react-native-async-storage/async-storage';

export const hasSeenOnboarding = async (): Promise<boolean> => {
  try {
    console.log('Checking AsyncStorage for onboarding status...');
    const value = await AsyncStorage.getItem('hasSeenOnboarding');
    console.log('Onboarding status value:', value);
    return value === 'true';
  } catch (error) {
    console.error('Error reading onboarding status:', error);
    return false;
  }
};

export const markOnboardingAsSeen = async (): Promise<void> => {
  try {
    console.log('Marking onboarding as seen...');
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    console.log('Onboarding marked as seen');
  } catch (error) {
    console.error('Error saving onboarding status:', error);
  }
};

export const resetOnboarding = async (): Promise<void> => {
  try {
    console.log('Resetting onboarding status...');
    await AsyncStorage.removeItem('hasSeenOnboarding');
    console.log('Onboarding status reset');
  } catch (error) {
    console.error('Error resetting onboarding status:', error);
  }
};