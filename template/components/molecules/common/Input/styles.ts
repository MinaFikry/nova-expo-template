import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { theme } from "@/utils/getTheme";
import { moderateScale } from "@/constants/Metrics";
import Spacing from "@/constants/Spacing";

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: COLORS[theme].border.danger,
    borderWidth: 1,
  },
  input: {
    color: COLORS[theme].text.heading,
    textAlignVertical: "center",
    flex: 1,
    ...GLOBAL_STYLES.font400,
    paddingVertical: 0,
    height: "100%",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: COLORS[theme].Surface.bg,
    borderColor: COLORS[theme].border.primary,
    borderRadius: moderateScale(32),
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Spacing.x3,
  },
  spaceEnd10: { marginEnd: Spacing.x2 },
  focusBorder: {
    borderColor: COLORS[theme].border.action,
    borderWidth: 1,
    shadowColor: COLORS[theme].border.action,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.32,
    shadowRadius: 6,
    elevation: 4,
  },
  labelContainer: {
    marginBottom: Spacing.x2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sm: {
    height: Spacing.x8,
  },
  lg: {
    height: Spacing.x9,
  },
  xl: {
    height: Spacing.x10,
  },
});

export default styles;
