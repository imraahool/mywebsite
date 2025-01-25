// Supabase Configuration
const supabaseUrl = "https://vedhqgkrvoxqrwnhbxxs.supabase.co"; // Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZGhxZ2tydm94cXJ3bmhieHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTMwMTcsImV4cCI6MjA1MzM4OTAxN30.uNERdYNpO9Z6vBef7XHpL8VwYk7fY46jGzTpB3u1xbw"; // Replace with your Supabase API Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// File Upload Logic
document.getElementById('uploadButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file!');
        return;
    }

    const { data, error } = await supabase.storage
        .from('Noor_files') // Replace with your bucket name
        .upload(`uploads/${file.name}`, file);

    const outputDiv = document.getElementById('output');
    if (error) {
        outputDiv.innerText = `Error: ${error.message}`;
    } else {
        outputDiv.innerText = `File uploaded successfully! Path: ${data.path}`;
    }
});
