import connectDB from '../../../middleware/mongoose';
import User from '../../../models/users';

connectDB();

const handler = async (req, res) => {
  

  if (req.method === 'POST') {
    console.log('Request method:', req.method);
  }
   
 
  await connectDB();

  console.log(req.body);
  const { first_name, last_name, phone_number, cs_age, cs_amount, cs_gender } = req.body;
  

  try {
   
    const user = new User({
      first_name,
      last_name,
      phone_number,
      cs_age,
      cs_amount,
      cs_gender,
    });

    
    await user.save();

   
    return res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    
    return res.status(500).json({ message: 'Failed to add user' });
  }

};

export default handler;
