import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: "#0097B280" },
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      {/* Camera Tab */}
      <Tabs.Screen
        name="camera"
        options={{
          headerShown: false,
          title: "Camera",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="camera" color={color} />
          ),
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          headerStyle: { backgroundColor: "#0097B280" },
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      {/* Settings Tab */}
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