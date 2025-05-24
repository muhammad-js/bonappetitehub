import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vedjilmqdfgxsqmibbeo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZGppbG1xZGZneHNxbWliYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5Nzk2NTYsImV4cCI6MjA2MzU1NTY1Nn0.SVIXDgvRcaLMOc6XCzgEhX1X7vfHzY65EaYmsyLhXJc'

export const supabase = createClient(supabaseUrl, supabaseKey)
