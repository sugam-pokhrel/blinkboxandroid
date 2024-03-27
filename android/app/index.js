import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView,Text, View, Image, TouchableOpacity, Modal, Alert } from 'react-native';

import { Stack, useRouter } from "expo-router";
import Sourab from '../compo/Sourab.js'

export default function App() {
 
  return (
    <View style={styles.container}>
      <Stack.Screen
        // Make sure to add a name prop to Stack.Screen
        options={{
          headerLeft: () => (
            <View style={{display:'flex',flexDirection:"row",alignItems:"center",gap:5}}>
         
            <Text style={{fontSize:16,fontStyle:"italic"}}>BlinkBox</Text>
            </View>
          ),
          headerRight: () => (

            <>
            </>
  
          ),
          headerTitle: "", // You can leave it empty if you don't want a title
        }}
      />
      <Sourab />


 
    </View>
  );
              }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    marginRight: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 50, // Make it circular
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  noticeContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center', // Center content horizontally
  },
  noticeImage: {
    width: '100%', // Make image fill container width
    height: 100, // Adjust height as needed
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
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
  modalText: {
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
  confirmButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  navStyle:{
    

  }
});