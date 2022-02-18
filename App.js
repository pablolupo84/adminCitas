import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Pressable,
} from 'react-native'

const App = () => {

  const nuevaCitaHandler = () => console.log("Presionaste el boton Nueva Cita")

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}> Administrador de Citas {'\n'}
        <Text style={styles.tituloBold}>VETERINARIA</Text>
      </Text>

      <Pressable style={styles.btnNuevaCita}
        onPress={ nuevaCitaHandler}
        >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
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
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius:10
  },
  btnTextoNuevaCita:{
    textAlign: 'center',
    color:'#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
})

export default App;