import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const HomeScreen = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('HomeScreen montado - Mostrando los menús');
  }, []);

  const menuItems = [
    {
      id: 'admin',
      title: 'Administrador',
      icon: '👨‍💼',
      route: '/pages/explore',
      description: 'Gestionar trabajadores y veterinarios',
    },
    {
      id: 'cattle',
      title: 'Mi Ganado',
      icon: '🐄',
      route: '/pages/explore',
      description: 'Gestiona todo tu ganado',
    },
    {
      id: 'informe',
      title: 'Informe',
      icon: '📖',
      route: '/pages/Informe',
      description: 'Generar infomes de ganado',
    },
    {
      id: 'vet',
      title: 'Datos veterinarios',
      icon: '💊',
      route: '/pages/explore',
      description: 'Datos veterinarios y medicamentos',
    },
    {
      id: 'qr',
      title: 'Escanear QR',
      icon: '📷',
      route: '/(tabs)/Qrcamera',
      description: 'Escanear códigos QR',
    },
    {
      id: 'production',
      title: 'Produccion',
      icon: '🥩',
      route: '/pages/production',
      description: 'Gestionar produccion',
    },
    {
      id: 'report',
      title: 'Reporte',
      icon: '📝',
      route: '/pages/report',
      description: 'Generar reporte',
    },
    {
      id: 'help',
      title: 'Ayuda',
      icon: '🆘',
      route: '/pages/help',
      description: 'Ayuda y soporte',
    },
  ];

  const navigateTo = (route: Parameters<typeof router.push>[0]) => {
    console.log('Navegando a:', route);
    router.push(route);
  };


  return (
    <View style={homeStyles.container}>
      <ScrollView style={homeStyles.menuContainer}>
        <View style={homeStyles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={homeStyles.menuItem}
               onPress={() => navigateTo(item.route as Parameters<typeof router.push>[0])}
            >
              <Text style={homeStyles.menuIcon}>{item.icon}</Text>
              <Text style={homeStyles.menuTitle}>{item.title}</Text>
              <Text style={homeStyles.menuDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};


export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  menuContainer: {
    flex: 1,
    padding: 15,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',

    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 12,

    textAlign: 'center',
  },
  statsContainer: {

    borderRadius: 10,
    padding: 15,
    marginBottom: 20,

  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',

    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statItem: {
    width: '48%',

    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',

    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
}); 


export default HomeScreen;