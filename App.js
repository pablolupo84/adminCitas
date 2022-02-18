import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Pressable,
} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}> Administrador de Citas {'\n'}
        <Text style={styles.tituloBold}>VETERINARIA</Text>
      </Text>

      <Pressable
        onPress={ () => console.log("Presionaste el boton Nueva Cita")}
        >
        <Text>Nueva Cita</Text>
      </Pressable>
    </SafeAreaView> 
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: '30',
    color: '#374151',
    fontWeight: 'bold 100',
  },
  tituloBold: {
    fontWeight: '900',
    color:'#6D28D9',
  }
})

export default App;