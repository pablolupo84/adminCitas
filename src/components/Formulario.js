import React, {useState} from 'react'
import {
    Text,
    Modal,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    ScrollView
  } from 'react-native'

import DatePicker from 'react-native-date-picker'
  
const Formulario = ({modalVisible}) => {
  
    const [paciente,setPaciente]=useState('')
    const [propietario,setPropietario]=useState('')
    const [email,setEmail]=useState('')
    const [telefono,setTelefono]=useState('')
    const [sintomas,setSintomas]=useState('')
    const [fecha,setFecha]=useState(new Date())
  
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
                        value={paciente}  
                        onChangeText={setPaciente}
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
                        value={propietario}  
                        onChangeText={setPropietario}  
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
                        value={email}  
                        onChangeText={setEmail}
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
                        value={telefono}  
                        onChangeText={setTelefono}  
                        maxLength={10}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Fecha Alta
                    </Text>
                    <View style={styles.fechaContenedor}>
                        <DatePicker
                            date={fecha}
                            locale='es'
                            onDateChange={(date)=>setFecha(date)}                 
                        />
                    </View>
                    
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Sintomas
                    </Text>
                    <TextInput 
                        style={[styles.input,styles.sintomasInput]}
                        placeholder='Sintomas'
                        placeholderTextColor={'#666'} 
                        value={sintomas}  
                        onChangeText={setSintomas}  
                        multiline={true}
                        numberOfLines={4}
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
    },
    sintomasInput:{
        height:100,
    },
    fechaContenedor:{
        backgroundColor: "#FFF",
        borderRadius:10,
    }
    
})

export default Formulario