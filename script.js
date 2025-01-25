const supabaseUrl = "https://vedhqgkrvoxqrwnhbxxs.supabase.co"; // Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZGhxZ2tydm94cXJ3bmhieHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTMwMTcsImV4cCI6MjA1MzM4OTAxN30.uNERdYNpO9Z6vBef7XHpL8VwYk7fY46jGzTpB3u1xbw"; // Replace with your API Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button clicked! Welcome to my website!');
});
