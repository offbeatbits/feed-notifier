import { config } from 'dotenv';

const env = () => {
  if (process.env.NODE_ENV !== 'production') config();
};

env();
