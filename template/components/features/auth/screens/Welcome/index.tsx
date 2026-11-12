import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import {
  Button,
  Orb,
  GradientSurface,
  Icon,
  Motion,
  Text,
} from "@/components/shared/ui";
import Spacing from "@/constants/Spacing";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import { iconsListType } from "@/@types/mainTypes";
import styles from "./styles";

const FEATURES: { icon: iconsListType; title: string; caption: string }[] = [
  { icon: "layers", title: "WELCOME_FEATURE_COMPONENTS", caption: "WELCOME_FEATURE_COMPONENTS_CAPTION" },
  { icon: "sliders", title: "WELCOME_FEATURE_THEMING", caption: "WELCOME_FEATURE_THEMING_CAPTION" },
  { icon: "zap", title: "WELCOME_FEATURE_PERFORMANCE", caption: "WELCOME_FEATURE_PERFORMANCE_CAPTION" },
  { icon: "code", title: "WELCOME_FEATURE_DEVELOPER", caption: "WELCOME_FEATURE_DEVELOPER_CAPTION" },
];

// Entrance sequence (ms): hero slides in from the right, feature cards slide in
// from the left one by one, then the buttons rise from the bottom.
const DURATION = 500;
const HERO_DELAY = 150;
const FEATURES_DELAY = 450;
const FEATURE_STEP = 120; // gap between each feature card
const ACTIONS_DELAY = FEATURES_DELAY + FEATURES.length * FEATURE_STEP + 150;

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper paddingSize="sm" showHeader={false} isScrollable>
      <View style={styles.container}>
        <Motion preset="slideRight" duration={DURATION} delay={HERO_DELAY}>
          <GradientSurface style={styles.hero}>
            <Orb size={Spacing.x14 * 4} style={styles.heroOrbLarge} />
            <Orb size={Spacing.x14 * 2} style={styles.heroOrbSmall} opacity={0.08} />
          <View style={styles.heroBadge}>
            <Icon name="star" size={12} color="onAction" />
            <Text variant="xsm" color="onAction">
              WELCOME_BADGE
            </Text>
          </View>
          <Text variant="H1" color="onAction">
            WELCOME_TITLE
          </Text>
          <Text variant="md" color="onAction" style={styles.heroBody}>
            WELCOME_SUBTITLE
          </Text>
          </GradientSurface>
        </Motion>

        <View style={styles.featuresGrid}>
          {FEATURES.map((feature, index) => (
            <Motion
              key={feature.title}
              preset="slideLeft"
              duration={DURATION}
              delay={FEATURES_DELAY + index * FEATURE_STEP}
              style={styles.featureCard}
            >
              <View style={styles.featureIcon}>
                <Icon name={feature.icon} size={20} color="action" />
              </View>
              <View>
                <Text size={15} fontFamily="font600" lineHeight={20}>
                  {feature.title}
                </Text>
                <Text variant="xsm" color="caption">
                  {feature.caption}
                </Text>
              </View>
            </Motion>
          ))}
        </View>

        <Motion
          preset="fadeUp"
          duration={DURATION}
          delay={ACTIONS_DELAY}
          style={styles.actions}
        >
          <Button
            title="CREATE_ACCOUNT"
            suffix={<Icon name="arrowRight" size={18} color="onAction" />}
            onPress={() => router.push("/(auth)/signup")}
          />
          <Button
            title="I_HAVE_AN_ACCOUNT"
            variant="outlined"
            onPress={() => router.push("/(auth)/login")}
          />
        </Motion>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
