const Joi = require("joi");

const validationTasks = (tasks) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
  });
  return schema.validate(tasks);
};

module.exports= validationTasks