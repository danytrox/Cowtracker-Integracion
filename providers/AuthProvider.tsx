
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';


type Authdata = {
  session: Session | null;
    loading: boolean;
    error: string | null;
};

const AuthContext = createContext<Authdata>({
    session: null,
    loading: true,
    error: null,
    });


interface Props {
    children: React.ReactNode;
    }


export default function AuthProvider(props:Props) {
    const { children } = props;
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchSession() {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                throw error;
            } 
            if (data.session) {
                setSession(data.session);
            }
            else {
                router.replace('/(tabs)/Qrcamera');
            }
            setLoading(false);
        }

        fetchSession();
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (_: string, session: Session | null) => {
                setSession(session);
                setLoading(false);
                if (session) {
                    router.replace('/(tabs)/Qrcamera');
                } else {
                    router.replace('/');
                }
            }
        );
        return () => {
            authListener.subscription.unsubscribe();
        };

    }, [router]);


    return (
        <AuthContext.Provider value={{ session, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);