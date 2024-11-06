import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../src/styles/styeleLogin';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (!username || !password) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }
      // Aqui você pode adicionar a lógica de login, como enviar as credenciais para um servidor
      Alert.alert('Sucesso', `Usuário: ${username}`);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../src/assets/LogoGalo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => router.push('/Login')}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
}
