import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { moderateScale } from "@/constants/Metrics";
import Spacing from "@/constants/Spacing";
import { theme } from "@/utils/getTheme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS[theme].Surface.bg,
    padding: Spacing.x6,
  },
  title: {
    fontSize: moderateScale(28),
    letterSpacing: -0.5,
    color: COLORS[theme].text.heading,
    ...GLOBAL_STYLES.font700,
  },
});
