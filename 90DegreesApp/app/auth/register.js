import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../(services)/api/api";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function Register() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const mutation = useMutation({
    mutationFn: registerUser,
    mutationKey: ["register"],
  });

  console.log(mutation);
  return (
    <View style={{height: "100%"}}>
      <ScrollView style={{
        backgroundColor: "white",
      }}>
        <Image style={{
            alignSelf: "center",
            width: Dimensions.get("window").width - 50,
            height: Dimensions.get("window").height * 0.3,
            resizeMode: "contain",
            marginTop: 20,
          }}source={require("../../assets/logo.png")} />
        {mutation?.isError ? (
          <Text style={styles.errorText}>
            {mutation?.error?.response?.data?.message}
          </Text>
        ) : null}
        {mutation?.isSuccess ? (
          <Text style={styles.successText}>
            {mutation?.error?.response?.data?.message}
          </Text>
        ) : null}
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            const data = {
              email: values.email,
              password: values.password,
            };
            mutation
              .mutateAsync(data)
              .then(() => {
                setMessage("Registration successful!");
                setMessageType("success");
                setTimeout(() => {
                  setMessage("");
                  router.push("/(tabs)");
                }, 2000); // Redirect after 2 seconds
              })
              .catch((error) => {
                setMessage(error?.response?.data?.message);
                setMessageType("error");
              });
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
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              ) : null}
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={mutation.isLoading}
              >
                {mutation.isPending ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Register</Text>
                )}
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginTop: 16 }}>
                <Text>Have an account? </Text>
                <TouchableOpacity onPress={() => router.replace("/")}>
                  <Text style={{ color: "#0097B2" }}>Login now.</Text>
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