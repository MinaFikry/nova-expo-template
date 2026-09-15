import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, FormInput } from "@/components/shared/ui";
import { Button, SeperateLine, Text } from "@/components/shared/ui";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import GoogleRegisterationButton from "@/components/features/auth/components/social/GoogleRegisterationButton";
import FacebookRegisterationButton from "@/components/features/auth/components/social/FacebookRegisterationButton";
import AppleRegistarationButton from "@/components/features/auth/components/social/AppleRegistarationButton";
import Biometric from "@/components/features/auth/components/biometric";
import styles from "./styles";

const Login = () => {
  const { control } = useForm({});
  const router = useRouter();

  return (
    <ScreenWrapper justifyContent="space-between" isScrollable>
      <View>
        <View style={{ marginBottom: 24 }}>
          <FormInput
            name="username"
            placeholder="Email"
            control={control}
            required
          />
          <FormInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            required
          />
          <View style={GLOBAL_STYLES.rowJustifyBetween}>
            <Controller
              control={control}
              name="remember_me"
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  label="Remember me"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <TouchableOpacity onPress={() => router.push("/(auth)/forgot-password")}>
              <Text color="black" size={12}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Login"
          onPress={() => router.replace("/(main)/(tabs)/Home")} // Navigate to the home page and replace the current route
        />
      </View>
      <Biometric />
      <SeperateLine />
      <View style={GLOBAL_STYLES.gap8}>
        <AppleRegistarationButton />
        <GoogleRegisterationButton />
        <FacebookRegisterationButton />
      </View>
      <View style={[GLOBAL_STYLES.rowCenter, GLOBAL_STYLES.gap4]}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text fontFamily="font600" color="primary" style={styles.underlined}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
