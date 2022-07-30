const Task = require('../model/tasks')
const getAllTasks = async (req, res) => {
  try{
    const tasks = await Task.find()
    res.status(200).json({tasks})
  }catch(err){
    res.status(500).json({msg: err});
  }
};

const getTask = async (req, res) => {
  try{
    const taskId = req.params.id
    const task = await Task.findOne({_id: taskId})
    if(!task){
      return res.status(404).json({msg: 'No such task'});
    }
    res.status(200).json({task})
  }catch(err){
    return res.status(500).json({msg: err});    
  }
};

const createTask = async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(201).json(task);
  }catch(err){
    res.status(500).json({msg: err});
  }
};

const updateTask = async (req, res) => {
  const taskId = req.params.id
  const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
    new: true,
    runValidators: true,
  })
  if(!task){
    return res.status(404).json({msg: 'No such task'});
  }
  res.status(200).json({task})
  res.send("Update Item");
};

const deleteTask = async (req, res) => {
  try{
    const taskId = req.params.id
    const task = await Task.findOneAndDelete({_id: taskId})
    if(!task){
      return res.status(404).json({msg: 'No such task'});
    }
    res.status(200).json({task})
  }catch(err){
    res.status(500).json({msg: err});
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
