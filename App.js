import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.titulo}> Administrador de Citas {'\n'}
        <Text>VETERINARIA</Text>
      </Text>
    </SafeAreaView> 
  );
}


const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: 'bold 100',
  }
})

export default App;