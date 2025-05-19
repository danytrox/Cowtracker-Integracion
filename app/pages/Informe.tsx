import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Informe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> cada dia mas cerca (DIcen) </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fondo blanco
    justifyContent: 'center',
    alignItems: 'center',
  },
});
