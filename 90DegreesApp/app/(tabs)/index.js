import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system"; // To get image file data
import { createImage } from "../(services)/api/api"; // Import the createImage function
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";

const TabHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const router = useRouter();

  const handleCamera = () => {
    router.replace("/camera");
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (imageUri) => {
    setUploading(true);

    try {
      // Get file info from the image URI
      const fileInfo = await FileSystem.getInfoAsync(imageUri);

      // Create the file object expected by createImage function
      const file = {
        uri: imageUri,
        name: fileInfo.uri.split('/').pop(), // Get the filename
        type: 'image/jpeg', // Assuming JPEG, adjust accordingly based on the picked file
      };

      // Call the createImage API to upload the image
      const response = await createImage(file, user.email);
      
      // Handle the response
      console.log(response.imageUrl);
      Alert.alert("Upload Success", `Image URL: ${response.imageUrl}`);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 60,
        fontWeight: "normal",
        textAlign: "center",
        color: "#333",
      }}>welcome to</Text>
      <Text style={{
        fontSize: 100,
        fontWeight: "semibold",
        marginBottom: 50,
        textAlign: "center",
        color: "#333",
      }}>90°</Text>
      <Text style={styles.title}>To get started, please upload some photos</Text>
      <TouchableOpacity style={{
        backgroundColor: "#0097B2",
        paddingHorizontal: 110,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
      }} onPress={pickImage}>
        <Text style={{
          color: "black",
          fontSize: 20,
          fontWeight: "normal",
          textAlign: "center",
        }}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor: "#FFBD59",
        paddingHorizontal: 110,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
      }} onPress={handleCamera}>
        <Text style={{
          color: "black",
          fontSize: 20,
          fontWeight: "normal",
          textAlign: "center",
        }}>Camera</Text>
      </TouchableOpacity>
      {uploading && <Text style={styles.uploadingText}>Uploading...</Text>}
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  uploadingText: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
});