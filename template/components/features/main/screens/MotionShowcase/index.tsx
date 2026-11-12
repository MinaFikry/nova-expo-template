import { useState } from "react";
import { View } from "react-native";
import { BounceIn, FadeIn } from "react-native-reanimated";

import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import {
  Button,
  Motion,
  MOTION_PRESETS,
  MotionPreset,
  Text,
} from "@/components/shared/ui";
import { MOTION_DEFAULTS } from "@/components/shared/ui/Motion/presets";
import MotionPlayground from "../../components/MotionPlayground";
import ShowcaseItem from "../../components/ShowcaseItem";
import ShowcaseSection from "../../components/ShowcaseSection";
import styles from "./styles";

const PRESETS = Object.keys(MOTION_PRESETS) as MotionPreset[];
const STAGGER_ITEMS = ["First", "Second", "Third", "Fourth", "Fifth"];

function DemoBox({ label }: { label: string }) {
  return (
    <View style={styles.box}>
      <Text
        size={13}
        fontFamily="font600"
        color="primary"
        autoTranslate={false}
      >
        {label}
      </Text>
    </View>
  );
}

/**
 * Live examples of every Motion preset and option. The playground picks a
 * preset, duration and delay; any change (or "Replay") remounts every example.
 */
export default function MotionShowcase() {
  const [replayKey, setReplayKey] = useState(0);
  const [isExitBoxShown, setIsExitBoxShown] = useState(true);
  const [preset, setPreset] = useState<MotionPreset>("fadeUp");
  const [duration, setDuration] = useState<number>(MOTION_DEFAULTS.duration);
  const [delay, setDelay] = useState(0);

  const replay = () => setReplayKey((key) => key + 1);

  /** Wraps a setter so changing a setting also replays the animations. */
  const andReplay =
    <T,>(setter: (value: T) => void) =>
    (value: T) => {
      setter(value);
      replay();
    };

  return (
    <ScreenWrapper variant="main" isScrollable>
      <View style={styles.header}>
        <Text variant="H2">MOTION</Text>
        <Text variant="md" color="body">
          MOTION_SUBTITLE
        </Text>
        <Button title="MOTION_REPLAY" onPress={replay} />
      </View>

      <MotionPlayground
        preset={preset}
        duration={duration}
        delay={delay}
        replayKey={replayKey}
        onPresetChange={andReplay(setPreset)}
        onDurationChange={andReplay(setDuration)}
        onDelayChange={andReplay(setDelay)}
        onReplay={replay}
      />

      {/* key={replayKey} remounts every example, which replays its entrance. */}
      <View key={replayKey} style={styles.sections}>
        <ShowcaseSection
          title="Presets"
          description='<Motion preset="..."> — each plays on mount and reverses on unmount.'
        >
          {PRESETS.map((item) => (
            <ShowcaseItem key={item} label={item}>
              <Motion preset={item} duration={duration}>
                <DemoBox label={item} />
              </Motion>
            </ShowcaseItem>
          ))}
        </ShowcaseSection>

        <ShowcaseSection
          title="Stagger"
          description="index={i} adds 60ms per item so a list enters one by one."
        >
          {STAGGER_ITEMS.map((label, index) => (
            <Motion key={label} index={index} duration={duration}>
              <DemoBox label={`${label} (index ${index})`} />
            </Motion>
          ))}
        </ShowcaseSection>

        <ShowcaseSection
          title="Timing"
          description="duration and delay are in milliseconds."
        >
          <ShowcaseItem label="duration={1200}">
            <Motion duration={1200}>
              <DemoBox label="Slow" />
            </Motion>
          </ShowcaseItem>
          <ShowcaseItem label="delay={800}">
            <Motion delay={800}>
              <DemoBox label="Waits, then enters" />
            </Motion>
          </ShowcaseItem>
        </ShowcaseSection>

        <ShowcaseSection
          title="Exit"
          description="Removing a Motion plays the preset's exit animation."
        >
          <Button
            title={isExitBoxShown ? "Hide" : "Show"}
            size="md"
            variant="outlined"
            onPress={() => setIsExitBoxShown((isShown) => !isShown)}
          />
          <View style={styles.exitArea}>
            {isExitBoxShown && (
              <Motion preset="zoom" duration={duration}>
                <DemoBox label="zoom in / zoom out" />
              </Motion>
            )}
          </View>
        </ShowcaseSection>

        <ShowcaseSection
          title="Custom"
          description="Pass any Reanimated animation to entering / exiting."
        >
          <ShowcaseItem label="entering={FadeIn.springify()}">
            <Motion entering={FadeIn.springify()}>
              <DemoBox label="Spring fade" />
            </Motion>
          </ShowcaseItem>
          <ShowcaseItem label="entering={BounceIn.duration(700)}">
            <Motion entering={BounceIn.duration(700)}>
              <DemoBox label="Bounce" />
            </Motion>
          </ShowcaseItem>
        </ShowcaseSection>
      </View>
    </ScreenWrapper>
  );
}
