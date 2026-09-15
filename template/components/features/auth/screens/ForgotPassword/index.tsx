import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import { Text } from "@/components/shared/ui";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import OtpInputs from "react-native-otp-molecule";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <ScreenWrapper justifyContent="space-between" isScrollable>
      <View>
        <OtpInputs
          inputsCount={6}
          inputStyle={{ height: 50 }}
          onSubmit={(otp: string, complete: boolean) => {
            console.log(otp, complete);
          }}
          placeHolderTextColor="#ccc"
          // secureEntry
        />
      </View>
      <View style={[GLOBAL_STYLES.rowCenter, GLOBAL_STYLES.gap4]}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text fontFamily="font600" color="primary">
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
