import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../src/styles/styleLaunch';

export default function Launch() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../src/assets/LogoGalo.png')} style={styles.logo} />
      </View>

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/HomeScreen')}>
        <Text style={styles.buttonText}>Produtor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Login')}>
        <Text style={styles.buttonText}>Técnico</Text>
      </TouchableOpacity>

      {/* Texto de rodapé */}
      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}
