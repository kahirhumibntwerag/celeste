import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://hcmgvlitqgamqidnrdnb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWd2bGl0cWdhbXFpZG5yZG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjI4MjgsImV4cCI6MjA2MDYzODgyOH0.7fX50zzJGfIyLto-C2GIhZmlFvn3_9At3pWGP0SoNpk'
const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase 