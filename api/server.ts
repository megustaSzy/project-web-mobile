import app from "./src/index";

const PORT = process.env.PORT || 3001;

// Tes
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});