const Joi = require('joi');

const createParamsObject = (req) => ({
  query: { ...req.query },
  params: { ...req.params },
  body: { ...req.body },
});

module.exports = (schema) => async (req, res, next) => {
  const mixedSchema = Joi.object(schema);
  const params = createParamsObject(req);
  const result = await mixedSchema.validate(params);

  if (result.error) {
    console.warn(result.error.message);

    return res.status(400).json({
      error: result.error.message,
    });
  }

  return next();
};
