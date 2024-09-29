import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Stack } from "expo-router/stack";
import { loadUser } from "./authSlice";

function AppWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ 
          title: "Login", 
          headerShown: true, 
          headerStyle: { backgroundColor: "#0097B280" },
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ 
          title: "Home", 
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/register"
        options={{ 
          title: "Register", 
          headerStyle: { backgroundColor: "#0097B280" },
        }}
      />
    </Stack>
  );
}

export default AppWrapper;