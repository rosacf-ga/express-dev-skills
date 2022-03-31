const Skill = require('../models/skill'); 

module.exports = {
    index,
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
}

function index (req, res){
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show (req, res){
    res.render('skills/show', {
        skillNum: req.params.id,
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req, res){
    res.render('skills/new')
}

function create(req, res){
    console.log(req.body, '<- req.body, contents of the form')
    //logic adding to the database using the model 
    Skill.create(req.body)
    //respond with a redirect 
    res.redirect('/skills'); 
}

function deleteSkill(req, res) {
    res.redirect('/skills')
    Skill.deleteOne(req.params.id)
} 

function edit(req, res){
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}
