import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../src/styles/styleHomeScreen';
import { useRouter } from 'expo-router'; 

export default function HomeScreen() {
  const router = useRouter();  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Notification')}>
        <Text style={styles.buttonText}>Iniciar Notificação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Assistência</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>
    </View>
  );
}
