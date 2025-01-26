// Initialize Supabase client


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vedhqgkrvoxqrwnhbxxs.supabase.co'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZGhxZ2tydm94cXJ3bmhieHhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTMwMTcsImV4cCI6MjA1MzM4OTAxN30.uNERdYNpO9Z6vBef7XHpL8VwYk7fY46jGzTpB3u1xbw";
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const messageDiv = document.getElementById("message");

uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) {
    messageDiv.textContent = "Please select a file.";
    return;
  }

  try {
    const { data, error } = await supabase.storage
      .from("Noor_files") // Replace "uploads" with your bucket name
      .upload(`public/${file.name}`, file);

    if (error) {
      throw error;
    }

    messageDiv.textContent = "File uploaded successfully!";
  } catch (error) {
    messageDiv.textContent = `Error: ${error.message}`;
  }
});
