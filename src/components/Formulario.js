import React from 'react'
import {
    Text,
    Modal,
    SafeAreaView
  } from 'react-native'
  

const Formulario = ({modalVisible}) => {
  return (
    
    <Modal
        animationType='slide'
        visible={modalVisible}
    >
        <SafeAreaView>
            <Text>Desde Modal</Text>
        </SafeAreaView>
    
    </Modal>
  )
}

export default Formulario