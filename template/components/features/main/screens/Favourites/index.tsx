import { Text } from "@/components/shared/ui";
import { Input, PhoneInput } from "@/components/shared/ui";
import ProgressLine from "@/components/shared/ui/ProgressLine";
import ScreenWrapper from "@/components/shared/layout/ScreenWrapper";
import React from "react";

const Favourites = () => {
  return (
    <ScreenWrapper variant="main">
      <ProgressLine progress={30} />

      <Text color="primary">Favourites</Text>
      <Input
        placeholder="Enter your name"
        onChange={(e) => console.log(e, "eeeeeeeeee")}
      />
      <Input
        placeholder="Search"
        isSearch
        onChange={(e) => console.log(e, "eeeeeeeeee")}
      />
      <Input placeholder="password" label="Password Label" secureTextEntry />
      <PhoneInput label="Phone" onChange={(phone) => console.log(phone)} />
    </ScreenWrapper>
  );
};

export default Favourites;
