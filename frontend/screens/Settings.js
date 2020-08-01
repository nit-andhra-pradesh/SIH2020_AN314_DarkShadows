import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Settings() {
  return (
    
    <View style={styles.container}>


      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
 
      
 
      </ScrollView>


    </View>);
}

Settings.navigationOptions = {

};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e6e6e',
  }
});
