import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

/**
 * Encrypted storage for secrets (auth tokens): iOS Keychain / Android Keystore
 * via expo-secure-store. Non-secret data (userInfo, remember_me, theme, lang)
 * stays in AsyncStorage.
 *
 * - Web has no SecureStore, so it falls back to AsyncStorage (localStorage).
 * - Values saved in AsyncStorage by older app versions are moved here on first
 *   read, so existing users stay signed in after updating.
 */
export const SECURE_KEYS = {
  token: "token",
  refreshToken: "refreshToken",
} as const;

export type SecureKey = (typeof SECURE_KEYS)[keyof typeof SECURE_KEYS];

const isSecureStoreSupported = Platform.OS !== "web";

async function migrateLegacyValue(key: SecureKey): Promise<string | null> {
  const legacyValue = await AsyncStorage.getItem(key);
  if (legacyValue === null) return null;
  await SecureStore.setItemAsync(key, legacyValue);
  await AsyncStorage.removeItem(key);
  return legacyValue;
}

export async function getSecureItem(key: SecureKey): Promise<string | null> {
  if (!isSecureStoreSupported) return AsyncStorage.getItem(key);
  const value = await SecureStore.getItemAsync(key);
  return value ?? migrateLegacyValue(key);
}

export async function setSecureItem(key: SecureKey, value: string) {
  if (!isSecureStoreSupported) return AsyncStorage.setItem(key, value);
  return SecureStore.setItemAsync(key, value);
}

export async function removeSecureItem(key: SecureKey) {
  if (!isSecureStoreSupported) return AsyncStorage.removeItem(key);
  // Also drop any legacy copy so it can't be migrated back later.
  await Promise.all([
    SecureStore.deleteItemAsync(key),
    AsyncStorage.removeItem(key),
  ]);
}

/** Removes every secret (used on logout and when clearing the session). */
export async function clearSecureStorage() {
  await Promise.all(Object.values(SECURE_KEYS).map(removeSecureItem));
}
