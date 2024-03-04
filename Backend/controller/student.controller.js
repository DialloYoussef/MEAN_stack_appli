const Etudiant = require('../model/student.model')


const create = async (req,res)=>{
   try{
    const etudiant = await Etudiant.create(req.body);
    res.json({ message: "Le departement a été creer avec succès." });
   }catch(error){
    res.send({error: "une erreur s'est produite"})
    console.log(error)
   }
    
}

const getAll = async (req,res)=>{
    const etudiants = await Etudiant.find().populate('departement');
    res.send(etudiants)
}

const deleted = async (req, res) => {
    try {
      await Etudiant.findByIdAndDelete(req.params.id);
      res.json({ message: "L'Etudiant a été supprimé avec succès." });
    } catch (error) {
      res.status(500).json({ error: "Une erreur s'est produite lors de la suppression de l'étudiant." });
      console.log(error);
    }
  };
  
const update = async (req, res) => {
    try {
        await Etudiant.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "L'Etudiant a été modifié avec succès." });
    } catch (error) {
        res.status(500).json({error: "Une erreur s'est produite lors de la modification de l'étudiant."});
        console.log(error);
    }
}


module.exports = {
    create,
    getAll,
    deleted,
    update
}