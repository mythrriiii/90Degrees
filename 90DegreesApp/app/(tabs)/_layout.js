import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#0097B280" },
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      {/* profile */}

      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerStyle: { backgroundColor: "#0097B280" },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="camera" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: "#0097B280" },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}