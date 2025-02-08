const { createClient } = supabase;
const project_URL = "<your-project-url>";
const project_API_KEY = "<your-api-key>"
const supabaseConfig = createClient(project_URL, project_API_KEY);
