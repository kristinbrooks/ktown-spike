// This is a helper file to initialize the Supabase client. It is ok that these
// variables are exposed because we have Row Level Security enabled on our database.
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://elsgcbbnmgqmoxcenjio.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsc2djYmJubWdxbW94Y2VuamlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMDk3MTAsImV4cCI6MTk4Nzc4NTcxMH0.z59Ds0GZs9PeZNdp6R9GXzCgClBCQVWwgdtpfCAiEKk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
