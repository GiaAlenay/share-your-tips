 const createPost=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const deletePost=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const updatePost=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getPost=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getPosts=async(req,res)=>{
    try {
        res.status(201)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports={
    getPosts,getPost,updatePost,deletePost,createPost
}