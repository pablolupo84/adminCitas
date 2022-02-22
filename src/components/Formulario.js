import React from 'react'
import {
    Text,
    Modal,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    ScrollView
  } from 'react-native'
  

const Formulario = ({modalVisible}) => {
  return (
    
    <Modal
        animationType='slide'
        visible={modalVisible}
    >
        <SafeAreaView style={styles.contedido}>
            <ScrollView>
                <Text style={styles.titulo}>Nueva {''}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Nombre de Paciente
                    </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre de Paciente'
                        placeholderTextColor={'#666'}    
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Nombre de Propietario
                    </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre de Propietario'
                        placeholderTextColor={'#666'}    
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Email de Propietario
                    </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email de Propietario'
                        placeholderTextColor={'#666'}  
                        keyboardType='email-address'  
                    />
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Telefono de Propietario
                    </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Telefono de Propietario'
                        placeholderTextColor={'#666'}  
                        keyboardType='number-pad'  
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Sintomas
                    </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Sintomas'
                        placeholderTextColor={'#666'}   
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    
    </Modal>
  )
}

const styles = StyleSheet.create({
    contedido: {
        backgroundColor: '#6D28D9',
        flex:1,
    },
    titulo:{
        fontSize:30,
        fontWeight:'600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900'
    },
    campo: {
        marginTop:10,
        marginHorizontal:30,
    },
    label: {
        color: '#FFU',
        marginBottom: 10,
        marginTop: 15,
        fontSize:20,
        fontWeight: '600'
    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius:10,
    }
    
})

export default Formulario