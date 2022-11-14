import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://clnnlxtcsclvnmhrjxdr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbm5seHRjc2Nsdm5taHJqeGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjg5MTEsImV4cCI6MTk4Mzc0NDkxMX0.2DlxQgEw6XPuT2ubm8FlhRAScEY1D9MpWqvb5iKKttQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}