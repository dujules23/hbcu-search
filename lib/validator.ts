import Joi, { ObjectSchema } from "joi";

export const errorMessages = {
  INVALID_NAME: "Name is missing!",
  INVALID_SPEC: "Specialization is missing!",
  INVALID_LOCATION: "Location is missing!",
};

export const schoolValidationSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_NAME,
    "any.required": errorMessages.INVALID_NAME,
  }),
  specialization: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_SPEC,
    "any.required": errorMessages.INVALID_SPEC,
  }),
  location: Joi.string().required().messages({
    "string.empty": errorMessages.INVALID_LOCATION,
    "any.required": errorMessages.INVALID_LOCATION,
  }),
});

export const validateSchema = (schema: ObjectSchema, value: any) => {
  const { error } = schema.validate(value, {
    errors: { label: "key", wrap: { label: false, array: false } },
    allowUnknown: true,
  });

  if (error) return error.details[0].message;

  return "";
};
