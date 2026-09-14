import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { moderateScale } from "@/constants/Metrics";
import { I18nManager, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    letterSpacing: 0,
  },
  H0: {
    fontSize: moderateScale(48),
    ...GLOBAL_STYLES.font700,
  },
  H1: {
    fontSize: moderateScale(32),
    lineHeight: moderateScale(38),
    ...GLOBAL_STYLES.font700,
  },
  H2: {
    fontSize: moderateScale(28),
    lineHeight: moderateScale(34),
    ...GLOBAL_STYLES.font500,
  },
  H3: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(30),
    ...GLOBAL_STYLES.font500,
  },
  H4: {
    fontSize: moderateScale(20),
    lineHeight: moderateScale(28),
    ...GLOBAL_STYLES.font500,
  },
  lg: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    ...GLOBAL_STYLES.font500,
  },
  md: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    ...GLOBAL_STYLES.font400,
  },
  sm: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    ...GLOBAL_STYLES.font400,
  },
  xsm: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    ...GLOBAL_STYLES.font400,
  },
});

export default styles;
