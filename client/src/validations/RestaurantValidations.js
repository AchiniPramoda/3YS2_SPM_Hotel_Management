import joi from "joi"

const restaurantValidations = (restaurant_for_validation) => {
    const schema = joi.object({
        name: joi.string().min(3).max(255).required().messages({
            "string.empty": `restaurant Name is required.`,
            "any.required": `restaurant Name is required.`,
            "string.base": `restaurant Name should be a type of 'text'.`,
            "string.min": `restaurant Name should have a minimum length of {#limit}.`,
            "string.max": `restaurant Name should have a maximum length of {#limit}.`,
        }),
        
        other: joi.string().min(3).max(1255).required().messages({
            "string.empty": `restaurant description is required.`,
            "any.required": `restaurant description is required.`,
            "string.base": `restaurant description should be a type of 'text'.`,
            "string.min": `restaurant description should have a minimum length of {#limit}.`,
            "string.max": `restaurant description should have a maximum length of {#limit}.`,
        }),
        description: joi.string().min(3).max(1255).required().messages({
            "string.empty": `restaurant description is required.`,
            "any.required": `restaurant description is required.`,
            "string.base": `restaurant description should be a type of 'text'.`,
            "string.min": `restaurant description should have a minimum length of {#limit}.`,
            "string.max": `restaurant description should have a maximum length of {#limit}.`,
        }),
    });

    const result = schema.validate(restaurant_for_validation);

    if (result.error) {
        return {
            status: false,
            error: result.error.message,
        }
    } else {
        return {
            status: true
        }
    }
};

export default restaurantValidations;