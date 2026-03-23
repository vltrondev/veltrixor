import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  const signup = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  const updateSubscriptions = async (productId) => {
    // This would normally be a database update in Supabase
    // For now we keep it as a simulated update if we want, 
    // or just say we'd use a 'subscriptions' table.
    if (!user) return;
    // Mocking it in the metadata for simplicity if allowed, 
    // but usually metadata is for profile.
    const { data, error } = await supabase.auth.updateUser({
      data: { 
        subscriptions: [...new Set([...(user.user_metadata?.subscriptions || []), productId])]
      }
    });
    if (error) throw error;
    setUser(data.user);
  };

  const updateProfile = async (updates) => {
    if (!user) return;
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    });
    if (error) throw error;
    setUser(data.user);
    return data.user;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateSubscriptions, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
