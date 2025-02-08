import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const Supabaseconfig = {
  url: "https://tsiriyarbapweplseeqv.supabase.co",
  ApiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
};

const supabase = createClient(Supabaseconfig.url, Supabaseconfig.ApiKey);

export { supabase, Supabaseconfig };
