import User from "../models/user.js";
import Teacher from '../models/teacher.js'
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

/*     export const register = async (req, res) => {
    const {email, password, username} = req.body;

    try {
      const passwordHash = await bcrypt.hash(
      password, 10,
      );

      const newUser = new User ({
            username,
            email,
            password: passwordHash,
        });

      const userSaved = await newUser.save();
      const token = await createAccesToken({id: userSaved._id});
        res.cookie('token', token)
        res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createdAt: userSaved.createdAt,      
        updatedAt: userSaved.updatedAt,
      });
      
     } catch (error) {
       res.status(500).json({ message: error }) 
     }
   }; */

  export const register = async (req, res) => {
    const {email, password, username, name, lastName, telefono, nameInstitution, address} = req.body;
    try {
        const passwordHash = await bcrypt.hash(
          password, 10,
          );
        const user = await User.create({
            username,
            email,
            password: passwordHash, 
        });
  
        
        const teacher = await Teacher.create({
            userId: user._id, 
            name,
            lastName,
            telefono,
            nameInstitution,
            address
        });
  
        // Step 3: Update User with Teacher ID
        user.teacherId = teacher._id;
        await user.save();
        const token = await createAccesToken({id: user._id});
        res.cookie('token', token)
        res.json({
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,      
        updatedAt: user.updatedAt,
        token,
        name: teacher.name,
        lastName: teacher.lastName,
        nameInstitution: teacher.nameInstitution,
        address: teacher.address
        
      });
  
       return res.status(201).json({ message: "Teacher created", user, teacher });
    } catch (error) {
       return res.status(500).json({ error: error.message });
    }
  };



   export const login = async (req, res) => {
    const { email, password } = req.body;

    try { 
      const userFound = await User.findOne({ email });
      if (!userFound) return res.status(400).json({ message: "User not found" });
      const teacherFound = await Teacher.findOne({ _id: userFound?.teacherId });
      if (!teacherFound) return res.status(400).json({ message: "Teacher not found" });

      const isMatch = await bcrypt.compare(password, userFound.password);
      
      if (!isMatch) return res.status(400).json({ message: "Incorrect password"});
      

      const token = await createAccesToken({id: userFound._id});
        res.cookie('token', token)
       return res.status(200).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,      
        updatedAt: userFound.updatedAt,
        token,
        teacherData: teacherFound
      });
      
     } catch (error) {
       res.status(500).json({ message: error }) 
     }
   };


   export const logout = (req, res) => {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    return res.sendStatus(200)
   };

   export const profile = async (req, res) => {
   const userFound = await User.findById(req.user.id)

   if (!userFound) return res.status(400).json({ message: "User not fount" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    })
   
  };
    

   



   

 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    