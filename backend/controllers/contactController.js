const Contact = require("../models/contact");

exports.create = async (req, res) => {
  const contact = new Contact(req.body);

  await contact.save();

  res.json(contact);
};

exports.getAll = async (req, res) => {
  const contacts = await Contact.find();

  res.json(contacts);
};

exports.update = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updated);
};

exports.remove = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
