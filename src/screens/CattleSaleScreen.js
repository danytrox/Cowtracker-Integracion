import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { cattleSaleStyles } from '../styles/cattleSaleStyles';
import { Ionicons } from '@expo/vector-icons';

const CattleSaleScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: new Date(),
    customer: '',
    selectedCattle: [],
    totalAmount: '',
    notes: ''
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.date;
    setShowDatePicker(Platform.OS === 'ios');
    setFormData({ ...formData, date: currentDate });
  };

  const handleSave = () => {
    if (!formData.customer || !formData.selectedCattle.length || !formData.totalAmount) {
      Alert.alert('Error', 'Por favor complete todos los campos requeridos');
      return;
    }

    // Aquí irá la lógica para guardar la venta
    Alert.alert('Éxito', 'Venta registrada correctamente');
    router.back();
  };

  const handleScan = () => {
    router.push({
      pathname: 'qr-scanner', // o la ruta real de tu QR
      params: { from: 'cattle-sale' }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={cattleSaleStyles.container} contentContainerStyle={{ paddingBottom: 140 }}>
        <View style={cattleSaleStyles.header}>
          <Text style={cattleSaleStyles.headerText}>Venta de Ganado</Text>
        </View>

        <View style={cattleSaleStyles.form}>
          {/* ...otros campos del formulario... */}
        </View>
      </ScrollView>

      <View style={[cattleSaleStyles.buttonContainer, styles.fixedButtons]}>
        <TouchableOpacity 
          style={styles.sideButton}
          onPress={() => router.back()}
        >
          <Text style={cattleSaleStyles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.scanButtonCenter}
          onPress={handleScan}
        >
          <Text style={styles.scanButtonText}>Scanear</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.sideButton}
          onPress={handleSave}
        >
          <Text style={cattleSaleStyles.saveButtonText}>Vender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  fixedButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 12,
  },
  sideButton: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#eee',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 120,
  },
  scanButtonCenter: {
    flex: 1.5,
    marginHorizontal: 8,
    backgroundColor: '#27ae60',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 180,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
};

export default CattleSaleScreen;