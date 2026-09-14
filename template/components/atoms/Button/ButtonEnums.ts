import { COLORS } from "@/constants/Colors";
import Spacing from "@/constants/Spacing";
import { theme } from "@/utils/getTheme";
import { ButtonSize, ButtonVariant, SizeConfig, VariantConfig } from "./types";

export const SIZE_CONFIG: Record<ButtonSize, SizeConfig> = {
  sm: {
    height: Spacing.x8,
    textVariant: "xsm",
  },
  md: {
    height: Spacing.x10,
    textVariant: "sm",
  },
  lg: {
    height: Spacing.x12,
    textVariant: "lg",
  },
};

export const VARIANT_CONFIG: Record<ButtonVariant, VariantConfig> = {
  primary: {
    btnStyle: {
      backgroundColor: COLORS[theme].Surface.action,
    },
    disabledBtnStyle: {
      backgroundColor: COLORS[theme].Surface.actionDisabled,
    },
    textColor: "onAction",
  },
  outlined: {
    btnStyle: {
      borderWidth: 1,
      borderColor: COLORS[theme].border.action,
    },
    disabledBtnStyle: {
      borderWidth: 1,
      borderColor: COLORS[theme].border.disabled,
    },
    textColor: "heading",
  },
  ghost: {
    textColor: "heading",
  },
  link: {
    textColor: "primary",
  },
  destructive: {
    btnStyle: {
      backgroundColor: COLORS[theme].Surface.danger,
    },
    disabledBtnStyle: {
      backgroundColor: COLORS[theme].Surface.actionDisabled,
    },
    textColor: "onAction",
  },
};
