 const createUSer=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const deleteUSer=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getUser=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getUsers=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const updateUSer=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getUsernames=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getEmails=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports={
    getEmails,getUsernames,updateUSer,deleteUSer,createUSer,getUser,getUsers
}