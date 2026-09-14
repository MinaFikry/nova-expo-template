import { StyleSheet } from "react-native";
import Spacing from "@/constants/Spacing";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: Spacing.x8,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Spacing.x4,
  },
  prefixSpacing: {
    marginEnd: Spacing.x2,
  },
  suffixSpacing: {
    marginStart: Spacing.x2,
  },
});

export default styles;
