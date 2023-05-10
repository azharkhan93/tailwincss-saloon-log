import connectDB from '../../../middleware/mongoose';
import User from '../../../models/users';

connectDB();

const handler = async (req, res) => {
  console.log('Request method:', req.method);
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;


