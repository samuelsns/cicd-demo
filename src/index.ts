import express, { Request, Response } from 'express';
import path from 'path';
import { Calculator } from './calculator';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to perform calculations
app.get('/api/calculate/:operation/:a/:b', (req: Request, res: Response) => {
  const { operation, a, b } = req.params;
  const calculator = new Calculator();
  let result;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  switch (operation) {
    case 'add':
      result = calculator.add(numA, numB);
      break;
    case 'subtract':
      result = calculator.subtract(numA, numB);
      break;
    case 'divide':
      result = calculator.divide(numA, numB);
      break;
    default:
      result = 'Invalid operation';
  }

  res.json({ result });
});

// Version endpoint to demonstrate CI/CD deployments
app.get('/api/version', (req: Request, res: Response) => {
  res.json({ 
    version: process.env.VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export for testing purposes
export { app };
