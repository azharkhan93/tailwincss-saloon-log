import connectDB from '../../../middleware/mongoose';


import User from '../../../models/users';

connectDB();

const handler = async (req, res) => {
  console.log('Request method:', req.method);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { first_name, last_name, phone_number, cs_age, cs_amount, cs_gender } = req.body;

  if (!first_name || !last_name || !phone_number || !cs_age || !cs_amount || !cs_gender) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newUser = new User({
      first_name,
      last_name,
      phone_number,
      cs_age,
      cs_amount,
      cs_gender,
    });

    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export default handler;





// import connectDB from '../../../middleware/mongoose';


// import User from '../../../models/users';

// connectDB();

// const handler = async (req, res) => {
//   console.log('Request method:', req.method);
//   if (req.method !== 'GET' && req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }
  

//   // if (req.method !== 'POST') {
//   //   return res.status(405).json({ error: 'Method not allowed' });
//   // }

//   try {
//     const { first_name, last_name, phone_number, cs_age, cs_amount, cs_gender } = req.body;
//     if (!first_name || !last_name || !phone_number || !cs_age || !cs_amount || !cs_gender) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     const newUser = new User({
//       first_name,
//       last_name,
//       phone_number,
//       cs_age,
//       cs_amount,
//       cs_gender,
//     });

//     const result = await newUser.save();
//     res.status(201).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// export default handler;









