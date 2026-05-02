import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qpiphgethtosrmqwnrsv.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_S7Znb_m2qipomrt34TpPcw_gDRaPkFW'

export const supabase = createClient(supabaseUrl, supabaseKey)
