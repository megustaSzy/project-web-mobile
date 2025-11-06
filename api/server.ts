import app from "./src/index";

// Load environment variables

const PORT = process.env.PORT || 3001;

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
