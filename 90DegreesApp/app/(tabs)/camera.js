import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system'; // To get image file data
import { createImage } from '../(services)/api/api'; // Import the createImage function
import { useSelector } from "react-redux";

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const uploadImage = async (imageUri) => {
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
      console.log(response);
      Alert.alert("Upload Success", `Image uploaded successfully!`);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to upload image");
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        await uploadImage(image); // Upload the image after saving
        alert('Picture saved and uploaded! 🎉');
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <CameraView
          style={styles.camera}
          ref={cameraRef}
        />
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
});
