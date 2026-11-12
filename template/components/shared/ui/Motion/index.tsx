import Animated from "react-native-reanimated";

import { MOTION_DEFAULTS, MOTION_PRESETS } from "./presets";
import { MotionProps } from "./types";

/**
 * Wrapper that animates its children in and out, like `Animated.View` with
 * ready-made animations. Runs on the UI thread (Reanimated layout animations)
 * and follows the device's "reduce motion" setting.
 *
 * @example
 * <Motion>...</Motion>                           // fade up on mount
 * <Motion preset="zoom" delay={150}>...</Motion> // named preset + delay
 * {items.map((item, i) => (
 *   <Motion key={item.id} index={i}>...</Motion> // staggered list
 * ))}
 * <Motion entering={FadeIn.springify()}>...</Motion> // fully custom
 */
export default function Motion({
  children,
  preset = "fadeUp",
  duration = MOTION_DEFAULTS.duration,
  delay = 0,
  index = 0,
  hasExit = true,
  entering,
  exiting,
  ...viewProps
}: MotionProps) {
  const config = MOTION_PRESETS[preset];
  const enterDelay = delay + index * MOTION_DEFAULTS.staggerStep;

  const enteringAnimation = entering ?? config.entering(duration, enterDelay);
  const exitingAnimation = hasExit
    ? (exiting ?? config.exiting(duration, 0))
    : undefined;

  return (
    <Animated.View
      entering={enteringAnimation}
      exiting={exitingAnimation}
      {...viewProps}
    >
      {children}
    </Animated.View>
  );
}
