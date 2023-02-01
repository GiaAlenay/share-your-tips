const { Post, Users ,Coment,Reacction,Category} = require("../db");
 const createPost=async(req,res)=>{
    try {
        const {description,media}=req.body
        const newPost=await Post.create({description,media})
        if (!newPost) {
            res.status(401).json({error:'There is been a problem ,please try again'})
        }else{
            res.status(201).json({msg:'Post created succesfully.'})
        }
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