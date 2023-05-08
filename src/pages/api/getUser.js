import connectDB from '../../../middleware/mongoose';


import User from '../../../models/users';

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

 
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

