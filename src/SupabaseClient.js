import { createClient } from "@supabase/supabase-js";

const supaUrl = "https://yxkgyymswfwqjuonxbge.supabase.co";
const supaKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4a2d5eW1zd2Z3cWp1b254YmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MjExOTksImV4cCI6MjA1ODk5NzE5OX0.Ndgt1lVOMDkKZn5-eBIiYotHxR4cU9QA6KUNc67fJi8";

export const supabase = createClient(supaUrl, supaKey);