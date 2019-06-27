import axios from 'axios';

const baseURL = process.env.STREAM_API || 'http://localhost:3001';
export default axios.create({
  baseURL
});
