import { useState } from "react";
import { Button, Text } from "@/components/shared/ui";
import { SheetManager } from "react-native-actions-sheet";
import RandomModal from "@/components/shared/wrappers/modals/randomModal";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";

const Explore = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const handleOpenActionSheet = async () => {
    const payload = await SheetManager.show("random-bottom-sheet", {
      payload: { title: "Random Sheet" },
    });
    console.log(payload);
    if (payload?.decision) {
      // Do something with the decision
    } else {
      // Do something else
    }
  };

  const handleOpenModal = () => {
    setisModalShown(true);
  };
  return (
    <ScreenWrapper variant="main">
      <Text>Explore</Text>
      <Button title="Open ActionSheet" onPress={handleOpenActionSheet} />
      <Button title="Open Modal" onPress={handleOpenModal} />

      {isModalShown && (
        <RandomModal
          isVisible={isModalShown}
          setVisible={setisModalShown}
          onSubmit={() => {}}
        />
      )}
    </ScreenWrapper>
  );
};

export default Explore;
