import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
    },
    logoContainer: {
      width: 350,
      height: 350,
      borderRadius: 10,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    logo: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    button: {
      width: '80%',
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    footerText: {
      fontSize: 14,
      color: '#777',
      position: 'absolute',
      bottom: 16,
    },
  });
  