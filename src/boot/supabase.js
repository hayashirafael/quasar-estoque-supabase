import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://souooykulkyhfgfrfoxh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA0NDExNSwiZXhwIjoxOTU1NjIwMTE1fQ.9VVT3e-dueFxj9u0k0BCixYNLC7luS33uE0ctalnSUM'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase (params) {
  return { supabase }
}
