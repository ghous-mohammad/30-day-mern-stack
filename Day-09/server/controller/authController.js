import User from "../model/user.js"
import { generateToken } from "../utils/jwtUtils.js"


const registerUser  = async  (req , res) => {
  const {name , email , password } = req.body;


  const userExists = await User.findOne('email');
  if(userExists) {
    return res.status(400).json({message : "user already exist"})
  }


  const user = User.create({name , email , password})
  if(user){
    res.json(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        }
    )
  }
  else {
    res.status(400).json({ message: 'Invalid user data' });
}
}

const authUser = async (req , res ) => {
  const {email , password} = req.body;
  const user = User.findOne({email});


  if(user && (await User.matchPassword(password)))
  {
    res.json(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      }
    )
  }
  else {
    res.status(401).json({ message: 'Invalid email or password' });
}

}


const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
      res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
      });
  } else {
      res.status(404).json({ message: 'User not found' });
  }
};


export {getUserProfile , authUser , registerUser}