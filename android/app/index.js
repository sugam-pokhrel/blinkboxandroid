import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity, Modal, Alert } from 'react-native';
import { Link } from 'expo-router';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility
  const [modalImage, setModalImage] = useState(""); // State to hold image URL for modal

  // Function to toggle modal visibility and set image URL
  const toggleModal = (imageURL) => {
    setModalImage(imageURL);
    console.log(imageURL)
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
    <Text><Link href="/upload">About</Link>  </Text> 
    
    <ScrollView>
        <View style={styles.flex}>
          {/* Wrap images with TouchableOpacity and attach onPress event */}
          <TouchableOpacity onPress={() => toggleModal(require('../assets/icon.png'))}>
            <Image style={styles.image} source={require('../assets/icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleModal("https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSNDQldXx8b-bDyGiykxKsIDYvWXtvZ7SQPurW_xDG1nYoBQgCXhLJ-FGTU6MrbFkt0zmpRJUoRiCvNKsI")}>
          <Image       style={styles.image}                source={{           uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSNDQldXx8b-bDyGiykxKsIDYvWXtvZ7SQPurW_xDG1nYoBQgCXhLJ-FGTU6MrbFkt0zmpRJUoRiCvNKsI"         }}       />
          {/* Add more images wrapped with TouchableOpacity here */}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Display image from modalImage state */}
            <Image style={styles.modalImage} source={modalImage ? { uri: modalImage } : null} />
            {/* Add more modal content here */}
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => toggleModal("")}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              {/* Add your confirm button or additional buttons here */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
  },
  image: {
    width: 165,
    height: 165,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  cancelButton: {
    marginRight: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});
