// Initialize Supabase client with your project details
const supabaseUrl = "https://vedhqgkrvoxqrwnhbxxs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZGhxZ2tydm94cXJ3bmhieHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTMwMTcsImV4cCI6MjA1MzM4OTAxN30.uNERdYNpO9Z6vBef7XHpL8VwYk7fY46jGzTpB3u1xbw";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// DOM Elements
const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const messageDiv = document.getElementById("message");

// Event Listener for Form Submission
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  const file = fileInput.files[0];
  if (!file) {
    messageDiv.textContent = "Please select a file.";
    return;
  }

  try {
    // Upload the file to the specified bucket
    const { data, error } = await supabase.storage
      .from("Noor_files") // Bucket name
      .upload(`public/${file.name}`, file);

    if (error) {
      throw error;
    }

    // Success message
    messageDiv.textContent = `File uploaded successfully: ${file.name}`;
    messageDiv.style.color = "green";
  } catch (error) {
    // Error message
    messageDiv.textContent = `Error: ${error.message}`;
    messageDiv.style.color = "red";
  }
});
