import { Text } from "@/components/shared/ui";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import React from "react";
import { Appearance, Switch, useColorScheme, View } from "react-native";

export default function Screen1() {
  const colorScheme = useColorScheme();

  return (
    <ScreenWrapper variant="main">
      <View style={GLOBAL_STYLES.rowJustifyBetween}>
        <Text>Enable Dark Mode</Text>
        <Switch
          value={colorScheme === "dark"}
          onChange={() => {
            Appearance.setColorScheme(colorScheme === "dark" ? "light" : "dark");
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
