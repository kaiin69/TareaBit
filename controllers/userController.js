const userModel = require("../Ejercicio-login-API/models/userModel");
const bcrypt = require("bcryptjs");

exports.getAllUsers = (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
};

//? createUser nos permite crear un usuario siempre y cuando cumpla con lo siguientes atributos
exports.createUser = (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const newUser = new userModel({
        username,
        email,
        password,
        isChidProfile,
        preferences,
      });
      newUser
        .save()
        .then(() => res.status(201).json({ success: "created" }))
        .catch((err) => res.status(500).json({ error: err.message }));
    }
  });
};

//? updateUser nos permite actualizar la informacion del usuario por meido del id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    isChildProfile,
    preferences,
  } = req.body;

  const saltRounds = 10;

  if (password) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        updateUserWithHash(id, username, email, hash, isChildProfile, preferences, res);
      }
    });
  } else {
    updateUserWithHash(id, username, null, isChildProfile, preferences, res);
  }n
};

function updateUserWithHash(id, username, email, hash, isChildProfile, preferences, res) {
  const updateFields = {
    username,
    email,
    isChildProfile,
    preferences,
  };

  if (hash) {
    updateFields.password = hash;
  }

  userModel
    .findByIdAndUpdate(id, updateFields, { new: true })
    .then((user) => {
      if (!user) throw new Error(`User with id ${id} not found`);
      res.status(200).json(user);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
}

//? deleteUser nos permite eliminar un usuario por medio del id
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findByIdAndDelete(id)
    .then((user) => {
      if (!user) throw new Error("user whith id ${id} not found");
      res.status(200).json({ message: "user deleted" });
    })

    .catch((err) => res.status(500).json({ error: err.message }));
};
