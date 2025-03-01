import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  res.send('🚀 Hello World from NimbusCore!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ NimbusCore is running on port ${PORT}`);
});
