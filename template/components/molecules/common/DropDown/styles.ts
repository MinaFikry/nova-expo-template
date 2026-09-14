import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";
import { theme } from "@/utils/getTheme";
import { moderateScale } from "@/constants/Metrics";
import Spacing from "@/constants/Spacing";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: moderateScale(20),
    paddingVertical: moderateScale(10),
  },
  item: {
    marginVertical: Spacing.x1,
    paddingVertical: Spacing.x1,
    ...GLOBAL_STYLES.row,
  },
  multiItem: {
    paddingHorizontal: Spacing.x3,
    ...GLOBAL_STYLES.gap8,
  },
  singleItem: {
    paddingHorizontal: Spacing.x3,
    paddingVertical: Spacing.x2,
  },
  selectedItem: {
    backgroundColor: COLORS[theme].Surface.bg,
    borderRadius: Spacing.x2,
  },
  selectedCheckContainer: {
    marginStart: "auto",
    marginEnd: Spacing.x2,
    backgroundColor: COLORS[theme].Surface.transparent,
    padding: Spacing.x1,
    borderRadius: Spacing.x1,
    ...GLOBAL_STYLES.vhCentering,
  },
  modalContainer: {
    position: "absolute",
  },
  flatList: {
    padding: Spacing.x2,
    backgroundColor: COLORS[theme].Surface.primary,
  },
  labelText: {
    marginBottom: Spacing.x2,
  },
  multiInputContainer: {
    ...GLOBAL_STYLES.row,
    alignContent: "center",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: COLORS[theme].border.primary,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(6),
    paddingVertical: Spacing.x1,
  },
  multiInputContainerActive: {
    borderColor: COLORS[theme].border.action,
  },
  prefixContainer: {
    marginEnd: Spacing.x2,
    ...GLOBAL_STYLES.vhCentering,
  },
  placeHolder: {
    ...GLOBAL_STYLES.fullSize,
    paddingHorizontal: moderateScale(6),
    paddingVertical: Spacing.x2,
    color: COLORS[theme].text.caption,
  },
  tagsInInputWrapper: {
    ...GLOBAL_STYLES.fullSize,
    ...GLOBAL_STYLES.row,
    ...GLOBAL_STYLES.gap8,
    flexWrap: "wrap",
  },
  tagInInput: {
    borderRadius: Spacing.x4,
    paddingHorizontal: Spacing.x3,
    paddingVertical: moderateScale(6),
    ...GLOBAL_STYLES.gap4,
    ...GLOBAL_STYLES.row,
    borderWidth: 1,
    borderColor: COLORS[theme].border.primary,
  },
  removeIconInInput: {
    padding: Spacing.x1,
    ...GLOBAL_STYLES.vhCentering,
  },
  errorBorder: {
    borderColor: COLORS[theme].border.danger,
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
