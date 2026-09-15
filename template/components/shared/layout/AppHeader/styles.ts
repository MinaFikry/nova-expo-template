import { StyleSheet } from "react-native";
import Radius from "@/constants/Radius";
import Spacing from "@/constants/Spacing";

/** Borderless header: the page background runs straight through it. */
export default StyleSheet.create({
  headerStyle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.x4,
    paddingVertical: Spacing.x2,
    minHeight: Spacing.x14,
  },
  NotiNum: {
    position: "absolute",
    top: -Spacing.x1,
    end: -Spacing.x1,
    zIndex: 1,
  },
  displayNone: {
    display: "none",
  },
  hiddenStyle: { opacity: 0, position: "relative" },
  spacing: {
    marginStart: -Spacing.x2,
    padding: Spacing.x2,
    borderRadius: Radius.pill,
  },
});
