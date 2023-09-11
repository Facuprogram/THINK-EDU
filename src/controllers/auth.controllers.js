import User from '../models/login.js'

export const register = async (req, res) => {
    console.log(req.body);
    const {email, password, username} = req.body
    try {
      const newUser = new User ({
            username,
            email,
            password,
        });
    
      await newUser.save(); 
      res.send("registrando")
    } catch (error) {
      console.log(error);  
    }
   
}

export const login = (req, res) => res.send("login");

