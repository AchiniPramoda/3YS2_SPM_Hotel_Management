import joi from "joi"

const HallValidations = (validation) => {
    const schema = joi.object({
        name: joi.string().required().messages({
            
            "string.base": "Hall Name must be a string",
            "string.empty": "Hall Name is required",
        }),
          
        hallType: joi.string().required().messages({
            "string.base": "Hall Type must be a string",
            "string.empty": "Hall Type is required"
        }),
        Space: joi.number().required().messages({
            "number.base": "Space must be a number",
            "number.empty": "Space is required"
        }),
        Guest : joi.string().required().messages({
            "string.base": "Guest must be a string",
            "string.empty": "Guest is required",
            "number.positive": "Guest must be a positive number"
        }),
       
        price: joi.number().required().messages({
            "number.base": "price must be a number",
            "number.empty": "price is required"
        }),

        description: joi.string().required().messages({
            "string.base": "description must be a string",
            "string.empty": "description is required"
        }),
        feacture: joi.string().required().messages({
            "string.base": "feacture must be a string",
            "string.empty": "feacture is required"
        }),

        event: joi.string().required().messages({
            "string.base": "Event must be a string",
            "string.empty": "Event is required"
        }),

    


    })
    const result = schema.validate(validation);

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


export default HallValidations;