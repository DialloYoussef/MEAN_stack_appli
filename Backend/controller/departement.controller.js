const Departement = require("../model/departement.model");

const create = async (req, res) => {
  try {
    const departement = await Departement.create(req.body);
    res.json({ message: "Le département a été créé avec succès." });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Une erreur s'est produite lors de la création du département.",
      });
    console.log(error);
  }
};

const getAll = async (req, res) => {
  const departements = await Departement.find();
  res.json(departements);
};

const deleted = async (req, res) => {
  // const { id } = req.params.id;
  try {
    await Departement.findByIdAndDelete(req.params.id);
    res.json({ message: "Le département a été supprimé avec succès." });
  } catch (error) {
    res
      .status(500)
      .json({
        error:
          "Une erreur s'est produite lors de la suppression du département.",
      });
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    await Departement.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true });
    res.json({ message: "Le département a été modifié avec succès." });
  } catch (error) {
    res
      .status(500)
      .json({
        error:
          "Une erreur s'est produite lors de la modification du département.",
      });
    console.log(error);
  }
};

module.exports = {
  create,
  getAll,
  deleted,
  update,
};
