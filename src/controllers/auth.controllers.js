import User from '../models/login.js'
import bcrypt from 'bcryptjs'
import  Jwt  from 'jsonwebtoken'

export const register = async (req, res) => {
    console.log(req.body);
    const {email, password, username} = req.body;

    try {
      const passwordHash = await bcrypt.hash(password, 10)

      const newUser = new User ({
            username,
            email,
            password: passwordHash,
        });
      const userSaved = await newUser.save(); 
      
     
              res.cookie('token', token)
              res.json({
              message: "User created successfully", 
            });

     // res.json({
       // id: userSaved.id,
        //username: userSaved.username,
        //email: userSaved.email,
       // createdAt: userSaved.createdAt,
        //updatedAt: userSaved.updatedAt,
      //})
    
    } catch (error) {
      console.log(error);  
    }
   
};

export const login = (req, res) => res.send("login");

