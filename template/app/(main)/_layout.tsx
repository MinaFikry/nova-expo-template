import MainScreenOptions, {
  createScreenOptions,
} from "@/components/shared/layout/MainScreenOptions";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={MainScreenOptions}>
      <Stack.Screen
        name="screen1/index"
        options={createScreenOptions({ title: "APPEARANCE" })}
      />
      <Stack.Screen
        name="screen2/index"
        options={createScreenOptions({ title: "ROUTE_PARAMS" })}
      />
      <Stack.Screen
        name="screen3/index"
        options={createScreenOptions({ title: "FLASH_LIST" })}
      />
      <Stack.Screen
        name="notifications/index"
        options={createScreenOptions({
          title: "NOTIFICATIONS",
          isRightComponentHidden: true,
        })}
      />
      <Stack.Screen
        name="(tabs)"
        options={createScreenOptions({ hasLogo: true })}
      />
    </Stack>
  );
}
