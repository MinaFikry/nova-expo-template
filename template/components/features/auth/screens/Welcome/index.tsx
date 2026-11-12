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
import { MOTION_DEFAULTS } from "@/components/shared/ui/Motion/presets";
import { iconsListType } from "@/@types/mainTypes";
import styles from "./styles";

const FEATURES: { icon: iconsListType; title: string; caption: string }[] = [
  { icon: "layers", title: "WELCOME_FEATURE_COMPONENTS", caption: "WELCOME_FEATURE_COMPONENTS_CAPTION" },
  { icon: "sliders", title: "WELCOME_FEATURE_THEMING", caption: "WELCOME_FEATURE_THEMING_CAPTION" },
  { icon: "zap", title: "WELCOME_FEATURE_PERFORMANCE", caption: "WELCOME_FEATURE_PERFORMANCE_CAPTION" },
  { icon: "code", title: "WELCOME_FEATURE_DEVELOPER", caption: "WELCOME_FEATURE_DEVELOPER_CAPTION" },
];

// Entrance sequence (ms): hero, then feature cards one by one, then actions.
const FEATURES_DELAY = 200;
const ACTIONS_DELAY =
  FEATURES_DELAY + FEATURES.length * MOTION_DEFAULTS.staggerStep + 100;

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper paddingSize="sm" showHeader={false} isScrollable>
      <View style={styles.container}>
        <Motion  preset="pop">
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
              preset="pop"
              index={index}
              delay={FEATURES_DELAY}
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

        <Motion delay={ACTIONS_DELAY}  preset="pop" style={styles.actions}>
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
