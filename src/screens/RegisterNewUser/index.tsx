import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

export default function RegisterNewUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargo, setCargo] = useState('')
  const [agencia, setAgencia] = useState('')

  const handleRegister = () => {
    if (username && email && password) {
      // Aqui você pode adicionar a lógica para enviar os dados para a API
      Alert.alert('Sucesso!', 'Cadastro realizado com sucesso.');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Técnico</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do Técnico(a)"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
          
      <Picker
        selectedValue={cargo}
        style={styles.picker}
        onValueChange={(itemValue) => setCargo(itemValue)}
      >
        <Picker.Item label="Selecione o seu cargo" value="" />
        <Picker.Item label="Lorem" value="Lorem" />
        <Picker.Item label="Ipsu" value="Ipsu" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>

      <Picker
        selectedValue={agencia}
        style={styles.picker}
        onValueChange={(itemValue) => setAgencia(itemValue)}
      >
        <Picker.Item label="Selecione a sua agencia" value="" />
        <Picker.Item label="Lorem" value="Lorem" />
        <Picker.Item label="Ipsu" value="Ipsu" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleRegister}  >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
} 