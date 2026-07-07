const tasksModel = require("../model/tasksModel");

// get all
exports.getAll =async (req,res)=>{
    try {
        const show = await tasksModel.find({});
        res.status(200).json(show);
    } catch(err) {
        res.status(400).json({Error: err.message});
    }
}

// get a particular 
exports.getOne = async(req,res)=>{
    const {id} = req.params;
    try{
        const task = await tasksModel.findById(id);
        if (!task) {
            return res.status(404).json({Error: "Task not found"});
        }
        res.status(200).json(task);
    }catch(err){
        res.status(400).json({Error: err.message});
    }
}

// post data
exports.postNew = async(req,res)=>{
    const {title , description , isCompleted} = req.body ;
    try{
        const insertNew = await tasksModel.create({title , description , isCompleted});
        res.status(200).json(insertNew);
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
}

// update existing task
exports.Update = async(req,res)=>{
    const {title , description , isCompleted} = req.body ;
    const {id} = req.params ;
    try{
        const update = await tasksModel.findByIdAndUpdate(id ,{title , description , isCompleted}, { new: true });
        if (!update) {
            return res.status(404).json({Error: "Task not found"});
        }
        res.status(200).json(update);
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
}

// delete the task
exports.del = async(req,res)=>{
    const {id} = req.params;
    try{
        const task = await tasksModel.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({Error: "Task not found"});
        }
        res.status(200).json(task);
    }catch(err){
        res.status(400).json({Error: err.message});
    }
}
