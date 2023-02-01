const { Post, Users ,Coment,Reacction,Category} = require("../db");
 const createPost=async(req,res)=>{
    try {
        const {idUser}=req.params
        const findPostOwner= await Users.findByPk(idUser)
        const postProperties={}
        for (const key in req.body) {
                postProperties[key]=req.body[key]           
        }
        const newPost=await Post.create(postProperties)
        if (!newPost) {
            res.status(401).json({error:'There is been a problem ,please try again'})
        }else{
            findPostOwner.addPost(newPost)
            res.status(201).json({msg:'Post created succesfully.'})
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const deletePost=async(req,res)=>{
    try {
        const{id}=req.params;
        const findPost= await Post.findByPk(id) 
        if (!findPost) {
            throw new Error('Post not found')
        }else{
            const postDeleted= await Post.destroy()
            if (!postDeleted) {
                res.status(401).json({error:'There is been a problem ,please try again'})
            }else{
                res.status(201).json({msg:'Post deleted succesfully.'})
            }
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const updatePost=async(req,res)=>{
    try {
        const {id}=req.params
        const confirmUpdates={}
        const findPost=await Post.findByPk(id) 
        if (!findPost) {
            throw new Error('Post not found')
        }else{
            for (const key in req.body) {
                confirmUpdates[key]=req.body[key]                
            }
            const updatedPost= await Post.update(confirmUpdates)
            if (!updatedPost) {
                res.status(401).json({error:'There is been a problem ,please try again'})
            }else{
                res.status(201).json({msg:'Post updated succesfully.'})
            }
        }
        
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getPost=async(req,res)=>{
    try {
        const {id}=req.params
        const findPost= await Post.findByPk(id)
        if (!findPost) {
            throw new Error('Post not found.')
        }else{
            res.status(201).json(findPost)
        }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

 const getPosts=async(req,res)=>{
    try {
        const allPosts= await Post.findAll()
        if (!allPosts.length) {
            res.status(201).json({msg:'No Posts to show.'}) 
         }else{
 
             res.status(201).json(allPosts)
         }
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports={
    getPosts,getPost,updatePost,deletePost,createPost
}