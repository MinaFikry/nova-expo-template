import { useState } from "react";
import { View } from "react-native";

import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import { Button, MotionText, Text } from "@/components/shared/ui";
import ReplaySection from "../../components/ReplaySection";
import ShowcaseItem from "../../components/ShowcaseItem";
import styles from "./styles";

const CUSTOM_GRADIENT = ["#22C55E", "#06B6D4", "#3B82F6"] as const;
const formatPrice = (value: number) => `$${value.toFixed(2)}`;

/**
 * One live example per MotionText effect. Each section has its own Replay
 * button; the one at the top replays every section.
 */
export default function MotionTextShowcase() {
  const [replayKey, setReplayKey] = useState(0);
  const replay = () => setReplayKey((key) => key + 1);

  return (
    <ScreenWrapper variant="main" isScrollable>
      <View style={styles.header}>
        <Text variant="H2">TEXT_EFFECTS</Text>
        <Text variant="md" color="body">
          TEXT_EFFECTS_SUBTITLE
        </Text>
        <Button title="MOTION_REPLAY" onPress={replay} />
      </View>

      <View style={styles.sections}>
        <ReplaySection
          replayAllKey={replayKey}
          title="Gradient"
          description='effect="gradient" — colors sweep through the letters in a loop.'
        >
          <ShowcaseItem label="Default (i18n key WELCOME_TITLE)">
            <MotionText effect="gradient" variant="H1">
              WELCOME_TITLE
            </MotionText>
          </ShowcaseItem>
          <ShowcaseItem label="hasGlow">
            <MotionText
              effect="gradient"
              hasGlow
              variant="H1"
              autoTranslate={false}
            >
              Neon glow
            </MotionText>
          </ShowcaseItem>
          <ShowcaseItem label="Custom colors, duration={2000}">
            <MotionText
              effect="gradient"
              colors={CUSTOM_GRADIENT}
              duration={2000}
              variant="H2"
              autoTranslate={false}
            >
              Fresh and fast
            </MotionText>
          </ShowcaseItem>
        </ReplaySection>

        <ReplaySection
          replayAllKey={replayKey}
          title="Shimmer"
          description='effect="shimmer" — a bright band passes over the text.'
        >
          <MotionText effect="shimmer" variant="lg" autoTranslate={false}>
            Loading your data…
          </MotionText>
        </ReplaySection>

        <ReplaySection
          replayAllKey={replayKey}
          title="Typing"
          description='effect="typing" — one character at a time, with a cursor.'
        >
          <MotionText effect="typing" variant="H3" autoTranslate={false}>
            Hello, welcome back 👋
          </MotionText>
          <ShowcaseItem label="speed={120}, hasCursor={false}">
            <MotionText
              effect="typing"
              speed={120}
              hasCursor={false}
              variant="md"
              color="body"
              autoTranslate={false}
            >
              Slower, no cursor.
            </MotionText>
          </ShowcaseItem>
        </ReplaySection>

        <ReplaySection
          replayAllKey={replayKey}
          title="Words"
          description='effect="words" — each word enters with a MotionView preset.'
        >
          <MotionText effect="words" variant="H3" autoTranslate={false}>
            Build apps that feel great
          </MotionText>
          <ShowcaseItem label='preset="pop"'>
            <MotionText
              effect="words"
              preset="pop"
              variant="H3"
              autoTranslate={false}
            >
              Every word pops in
            </MotionText>
          </ShowcaseItem>
        </ReplaySection>

        <ReplaySection
          replayAllKey={replayKey}
          title="Letters"
          description='effect="letters" — letter by letter. Use "words" for Arabic.'
        >
          <MotionText effect="letters" variant="H2" autoTranslate={false}>
            Letter by letter
          </MotionText>
          <ShowcaseItem label='preset="fadeDown"'>
            <MotionText
              effect="letters"
              preset="fadeDown"
              variant="H2"
              autoTranslate={false}
            >
              Dropping in
            </MotionText>
          </ShowcaseItem>
        </ReplaySection>

        <ReplaySection
          replayAllKey={replayKey}
          title="Count"
          description='effect="count" — counts up to a number, easing at the end.'
        >
          <MotionText effect="count" to={1250} variant="H1" />
          <ShowcaseItem label="Custom format (price)">
            <MotionText
              effect="count"
              to={49.99}
              format={formatPrice}
              variant="H2"
              color="primary"
            />
          </ShowcaseItem>
        </ReplaySection>
      </View>
    </ScreenWrapper>
  );
}
