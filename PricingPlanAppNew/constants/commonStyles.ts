import { StyleSheet } from 'react-native';

// Color palette
export const COLORS = {
  PRIMARY_TINT: '#09b6d4',
  BACKGROUND_DARK: '#0f172b',
  CARD_BACKGROUND: '#1d293b',
  BORDER_DEFAULT: '#334155',
  TEXT_LIGHT: '#ffffff',
  TEXT_SECONDARY: '#94a3b8',
  TEXT_PLACEHOLDER: '#64748b',
  ERROR_RED: '#ef4444',
};

// Spacing scale
export const SPACING = {
  XXS: 4,
  XS: 8,
  SM: 12,
  MD: 16,
  LG: 20,
  XL: 24,
  XXL: 32,
  XXXL: 40,
};

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWithPadding: {
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  textArea: {
    height: 120,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 16,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
    marginBottom: 16,
  },
  primaryButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  paddingHorizontalMd: {
    paddingHorizontal: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
});