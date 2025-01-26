// Initialize Supabase client

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vedhqgkrvoxqrwnhbxxs.supabase.co'
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
      .from("uploads") // Replace "uploads" with your bucket name
      .upload(`public/${file.name}`, file);

    if (error) {
      throw error;
    }

    messageDiv.textContent = "File uploaded successfully!";
  } catch (error) {
    messageDiv.textContent = `Error: ${error.message}`;
  }
});
