import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const missingEnvError = new Error(
  'Supabase env vars missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
);

function createSupabaseStub() {
  console.warn(missingEnvError.message);

  const queryStub = () => ({
    insert: async () => Promise.reject(missingEnvError),
    select: async () => Promise.reject(missingEnvError),
    update: async () => Promise.reject(missingEnvError),
    delete: async () => Promise.reject(missingEnvError)
  });

  return {
    from: queryStub,
    rpc: async () => Promise.reject(missingEnvError),
    auth: {
      signInWithPassword: async () => Promise.reject(missingEnvError),
      signOut: async () => Promise.reject(missingEnvError),
      getSession: async () => Promise.reject(missingEnvError)
    },
    storage: {
      from: queryStub
    }
  } as any;
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createSupabaseStub();