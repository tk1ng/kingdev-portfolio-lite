import { createClient } from '@supabase/supabase-js';

const DATABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const DATABASE_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const dbClient = createClient(DATABASE_URL, DATABASE_KEY);