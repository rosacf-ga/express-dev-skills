const skills = [
    {id: 12690, skill: 'Run commands in terminal', mastered: true},
    {id: 12387, skill: 'Complete a project using JavaScript', mastered: true},
    {id: 12841, skill: 'Know how to use express', mastered: false},
]

module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne
};

function getAll(){
    return skills;
}

function getOne(id){
    // Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
    //parseint is function/method where you can pass a string or datatype and it will convert into integer
}   //whenever we have number we will most likely have to use parseInt because everything in url is a string even if it's technicaly a number 
    //so to make sure the skill.id equals the id in url, we will have to do parseint so it becomes integer

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be mastered :)
    skill.mastered = false;
    skills.push(skill);
}

function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}