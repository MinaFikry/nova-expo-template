import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { theme } from "@/utils/getTheme";
import { moderateScale } from "@/constants/Metrics";
import Spacing from "@/constants/Spacing";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS[theme].border.primary,
    borderRadius: 32,
    padding: moderateScale(1),
    ...GLOBAL_STYLES.vhCentering,
  },
  labelContainer: {
    marginBottom: Spacing.x2,
  },
  errorBorder: {
    borderColor: COLORS[theme].border.danger,
  },
  countryPrefixContainer: {
    width: moderateScale(120),
  },
  dropDown: {
    borderWidth: 0,
  },
  flatList: {
    paddingHorizontal: 0,
    paddingStart: moderateScale(4),
  },
  inputCon: {
    ...GLOBAL_STYLES.fullSize,
  },
  input: {
    borderWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    elevation: 0,
    paddingHorizontal: 0,
  },
});

export default styles;
