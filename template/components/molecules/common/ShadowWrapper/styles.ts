import { Platform, StyleSheet } from "react-native";
import getShadowStyle from "@/utils/getShadowStyle";
import { COLORS } from "@/constants/Colors";
import { theme } from "@/utils/getTheme";
import Spacing from "@/constants/Spacing";

const styles = StyleSheet.create({
  inner: {
    backgroundColor: COLORS[theme].Surface.primary,
    overflow: "hidden",
    ...(Platform.OS === "ios" ? {} : getShadowStyle()),
  },
  outer: {
    backgroundColor: COLORS[theme].Surface.primary,
    marginHorizontal: Spacing.x2,
    marginVertical: Spacing.x2,
    ...(Platform.OS === "android" ? {} : getShadowStyle()),
  },
});

export default styles;
