import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Roll Images</Text>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {images.map((imageUri, index) => (
          <Image key={index} source={{ uri: imageUri }} style={styles.image} />
        ))}
      </ScrollView>

      <Button onPress={pickImage} title="Pick an image from camera roll" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginHorizontal: 15,
  },
  scrollView: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
});
