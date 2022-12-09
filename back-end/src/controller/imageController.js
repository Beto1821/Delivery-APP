const imageService = require('../service/imageService');

const getImage = async (req, res) => {
  const { fileName } = req.params;

  const result = await imageService.getImage(fileName);

  res.contentType('jpeg').status(200).send(result);
};

const imageController = {
  getImage,
};

module.exports = imageController;
