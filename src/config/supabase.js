import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';

// Obtener credenciales de Supabase desde variables de entorno
const supabaseUrl = 'https://ijzvgpmxideftivpzzar.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqenZncG14aWRlZnRpdnB6emFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTg0MzAsImV4cCI6MjA5MDYzNDQzMH0.OTRyKeuPkvqQLoIlcoBh0MxN3KqVOSV1rXIQHI7UdZM';

let supabaseOptions = {};

if (Platform.OS === 'web') {
  // Para web, usamos localStorage en lugar de AsyncStorage
  supabaseOptions = {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  };
} else {
  // Para mobile, usamos AsyncStorage
  supabaseOptions = {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  };
}

// Inicializar cliente de Supabase con las opciones apropiadas
const supabase = createClient(supabaseUrl, supabaseAnonKey, supabaseOptions);

console.log('✅ Cliente de Supabase inicializado en el frontend');

export { supabase }; 