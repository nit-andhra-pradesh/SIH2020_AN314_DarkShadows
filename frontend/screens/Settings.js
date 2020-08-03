import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function Settings() {
  return (

    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#c3fdff', '#0083B0']}>



        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>



        </ScrollView>
      </LinearGradient>

    </View>);
}

Settings.navigationOptions = {

};





const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
