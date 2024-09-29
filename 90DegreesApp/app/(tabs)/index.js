import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system"; // To get image file data
import { createImage } from "../(services)/api/api"; // Import the createImage function
import { useSelector } from "react-redux";


const TabHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const user = useSelector((state) => state.auth.user);

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
      <Text style={styles.title}>Upload a Photo</Text>
      <Button title="Pick an image from gallery" onPress={pickImage} />
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
    fontSize: 24,
    fontWeight: "bold",
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
    color: "blue",
    marginTop: 10,
  },
});