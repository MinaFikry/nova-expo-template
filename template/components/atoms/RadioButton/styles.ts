import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";
import { theme } from "@/utils/getTheme";
import { moderateScale } from "@/constants/Metrics";
import Spacing from "@/constants/Spacing";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.row,
    ...GLOBAL_STYLES.vhCentering,
  },
  radioContainer: {
    marginInlineEnd: Spacing.x2,
    ...GLOBAL_STYLES.vhCentering,
  },
  radio: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(20) / 2,
    borderWidth: 2,
    borderColor: COLORS[theme].border.primary,
    ...GLOBAL_STYLES.vhCentering,
  },
  radioSelected: {
    borderColor: COLORS[theme].border.action,
  },
  radioDot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(10) / 2,
    backgroundColor: COLORS[theme].Surface.action,
  },
  disabledRadio: {
    opacity: 0.5,
  },
});

export default styles;
