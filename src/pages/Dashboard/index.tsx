import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Controle de Gastos</Text>
      </View>
      <TextInput placeholder='Descrição'/>
      <TextInput placeholder='Data'/>
      <TextInput placeholder='Valor'/>
      <TextInput placeholder='Categoria'/>
      <TextInput placeholder='Local'/>

      <StatusBar style="auto" />
    </View>
  );
}


