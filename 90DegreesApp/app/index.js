import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./(services)/api/api";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./(redux)/authSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function App() {
  const router = useRouter();
  //dispatch
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: loginUser,
    mutationKey: ["login"],
  });
  // console.log(mutation);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (user) {
      router.push("/(tabs)");
    }
  }, []);
  console.log("user", user);
  return (
    <View style={{
      height: "100%",
    }}>
      <ScrollView style={{
        backgroundColor: "white",
      }}>
          <Image style={{
            alignSelf: "center",
            width: Dimensions.get("window").width - 50,
            height: Dimensions.get("window").height * 0.3,
            resizeMode: "contain",
            marginTop: 20,
          }}source={require("../assets/logo.png")} />
          <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            mutation
              .mutateAsync(values)
              .then((data) => {
                console.log("data", data);
                dispatch(loginAction(data));
              })
              .catch((err) => {
                console.log(err);
              });
            router.push("/(tabs)");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
              <TouchableOpacity onPress={() => router.push("/forgot-password")}>
                <Text style={{ color: "#0097B2", marginBottom: 16 }}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 16 }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.replace("/auth/register")}>
                  <Text style={{ color: "#0097B2" }}>Register now.</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <View style={{
        height: "10%",
        backgroundColor: "#0097B280",
      }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#646363",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 16,
    marginTop: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  button: {
    height: 50,
    width: "90%",
    backgroundColor: "#0097B2",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});