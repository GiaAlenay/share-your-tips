const {Users } = require("../db");
 const createUSer=async(req,res)=>{
    try {
        const {email,id}=req.body
        const newUser=await Users.create({email,id})
        if (!newUser) {
            res.status(401).json({error:'There is been a problem ,please try again'})
        }else{
            res.status(201).json({msg:'User created succesfully.'})
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const deleteUSer=async(req,res)=>{
    try {
        const {id}=req.params
        const findUser= await Users.findByPk(id)
        const deletedUser= await findUser.destroy()
        if (!deletedUser) {
            res.status(400).json({error:`There's been a problem please try again`})
        }
        else{
            res.status(201).json({msg:'User deleted succesfully.'})
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getUser=async(req,res)=>{
    try {
        const {id}=req.params
        const findUser= await Users.findByPk(id)
        if (!findUser) {
            res.status(401).json({error:'User not found.'})
        }
        else{
            res.status(201).json(findUser)

        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getUsers=async(req,res)=>{
    try {
        const allUsers = await Users.findAll();
        if (!allUsers.length) {
           res.status(201).json({msg:'No users to show.'}) 
        }else{

            res.status(201).json(allUsers)
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const updateUSer=async(req,res)=>{
    try {
        const {id}=req.params
        const findUser= await Users.findByPk(id)
        if (!findUser) {
            res.status(401).json({error:'User not found.'})
        }
        else{
            const confirmUpdates={}
            for (const key in req.body) {
                confirmUpdates[key]=req.body[key]               
            }
            if (findUser.firsLogin===true)  confirmUpdates.firsLogin=false               
            const updatedUser= await findUser.update(confirmUpdates)

            if (!updatedUser) {
                res.status(400).json({error:`There's been a problem please try again`})            
            }else{
                res.status(201).json({msg:`User updated succesfully.`})     
            }          

        }

    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getUsernames=async(req,res)=>{
    try {
        const allUsers= await Users.findAll()
        if (!allUsers.length) {
            res.status(201).json({msg:'No users found.'}) 
        }else{
            const allUsernames=allUsers.map(u=> {return u.email} )        
            res.status(201).json(allUsernames)
        }
        
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getEmails=async(req,res)=>{
    try {
        const allUsers= await Users.findAll()
        if (!allUsers.length) {
            res.status(201).json({msg:'No users found.'}) 
        }else{
            const allEmails=allUsers.map(u=> {return u.email} )        
            res.status(201).json(allEmails)
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports={
    getEmails,getUsernames,updateUSer,deleteUSer,createUSer,getUser,getUsers
}