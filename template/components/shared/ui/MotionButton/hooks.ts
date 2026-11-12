import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import {
  cancelAnimation,
  Easing,
  EasingFunction,
  SharedValue,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { MOTION_BUTTON_DEFAULTS, PRESS_SPRING } from "./constants";
import { TouchHandlers } from "./types";

/**
 * Tracks press state from raw touch events on the wrapper. These fire even
 * though the wrapped button handles the press, so its onPress is untouched.
 */
export function usePressFeedback({
  hasHaptics,
  isDisabled,
}: {
  hasHaptics: boolean;
  isDisabled: boolean;
}): { pressed: SharedValue<number>; touchHandlers: TouchHandlers } {
  const pressed = useSharedValue(0);

  const onTouchStart = () => {
    if (isDisabled) return;
    pressed.set(withSpring(1, PRESS_SPRING));
    if (hasHaptics) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  const release = () => pressed.set(withSpring(0, PRESS_SPRING));

  return {
    pressed,
    touchHandlers: {
      onTouchStart,
      onTouchEnd: release,
      onTouchCancel: release,
    },
  };
}

/** Slight shrink while pressed. */
export function usePressScaleStyle(pressed: SharedValue<number>) {
  return useAnimatedStyle(() => ({
    transform: [
      { scale: 1 - pressed.get() * (1 - MOTION_BUTTON_DEFAULTS.pressedScale) },
    ],
  }));
}

interface LoopOptions {
  // Pass `easing` as a module-level constant: a new function each render
  // would restart the loop.
  /** One run from 0 to 1, in ms. */
  duration: number;
  /** Rest at 0 between runs, in ms. */
  pauseMs?: number;
  /** Go 0 → 1 → 0 (breathing) instead of jumping back to 0. */
  isReversing?: boolean;
  isEnabled?: boolean;
  easing?: EasingFunction;
}

/**
 * A 0 → 1 value that loops forever while enabled. Stays at 0 when the device
 * asks for reduced motion, so decorative loops stop but presses still work.
 */
export function useLoopProgress({
  duration,
  pauseMs = 0,
  isReversing = false,
  isEnabled = true,
  easing = Easing.linear,
}: LoopOptions) {
  const progress = useSharedValue(0);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isEnabled || isReducedMotion) {
      progress.set(0);
      return;
    }
    const run = withTiming(1, { duration, easing });
    const cycle =
      pauseMs > 0
        ? withSequence(run, withDelay(pauseMs, withTiming(0, { duration: 0 })))
        : run;
    progress.set(withRepeat(cycle, -1, isReversing));
    return () => cancelAnimation(progress);
  }, [
    duration,
    easing,
    isEnabled,
    isReducedMotion,
    isReversing,
    pauseMs,
    progress,
  ]);

  return progress;
}
