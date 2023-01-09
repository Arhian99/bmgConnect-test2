import { View, Text, Image, ScrollView, TextInput, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../node_modules/@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { Button } from '../node_modules/@rneui/themed';


function FormButton(props) {
    return (
    <Button
      buttonStyle={props.buttonStyle}
      containerStyle={props.containerStyle}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      linearGradientProps={null}
      icon={props.icon}
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={props.onPress}
      title={props.title}
      titleProps={{}}
      titleStyle={{ marginHorizontal: 5 }}
    />
  );
};

export default FormButton;




