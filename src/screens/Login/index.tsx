import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';

// Tipagem da navegação para o LoginScreen
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;  // Corrigindo a tipagem de 'navigation'
};

export default function LoginScreen({ navigation }: Props) {  // Usando a tipagem correta para as props
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
          <Image source={require('../../assets/LogoGalo.png')} style={styles.logo} />
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeAdmin')}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
}
