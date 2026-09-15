import React from "react";
import { View } from "react-native";
import { Text } from "@/components/shared/ui";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import ButtonShowcase from "../../components/ButtonShowcase";
import DisclosureShowcase from "../../components/DisclosureShowcase";
import DisplayShowcase from "../../components/DisplayShowcase";
import DropDownShowcase from "../../components/DropDownShowcase";
import FeedbackShowcase from "../../components/FeedbackShowcase";
import FormShowcase from "../../components/FormShowcase";
import InputShowcase from "../../components/InputShowcase";
import NavigationShowcase from "../../components/NavigationShowcase";
import OverlayShowcase from "../../components/OverlayShowcase";
import SelectionShowcase from "../../components/SelectionShowcase";
import TextShowcase from "../../components/TextShowcase";
import styles from "./styles";

const Home = () => {
  return (
    <ScreenWrapper variant="main" isScrollable>
      <View style={styles.intro}>
        <Text variant="H2">Components</Text>
        <Text variant="md" color="body" autoTranslate={false}>
          Every shared component and its variants, live and interactive.
        </Text>
      </View>

      <TextShowcase />
      <ButtonShowcase />
      <InputShowcase />
      <SelectionShowcase />
      <DropDownShowcase />
      <FormShowcase />
      <FeedbackShowcase />
      <DisplayShowcase />
      <DisclosureShowcase />
      <OverlayShowcase />
      <NavigationShowcase />
    </ScreenWrapper>
  );
};

export default Home;
