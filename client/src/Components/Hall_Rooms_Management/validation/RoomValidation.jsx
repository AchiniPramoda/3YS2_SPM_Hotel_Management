import joi from "joi"

const RoomValidations = (validation) => {
    const schema = joi.object({
        RoomId: joi.string().min(3).max(4).required().messages({
            
            "string.base": "RoomId must be a string",
            "string.empty": "RoomId is required",
            "string.min": "RoomId must be at least 3 characters",
            "string.max": "RoomId must be at most 4 characters"
        }),
          
        roomType: joi.string().required().messages({
            "string.base": "roomType must be a string",
            "string.empty": "roomType is required"
        }),
        beads: joi.number().required().messages({
            "number.base": "beads must be a number",
            "number.empty": "beads is required"
        }),
        clients : joi.string().required().messages({
            "string.base": "client must be a string",
            "string.empty": "client is required",
            "number.positive": "client must be a positive number"
        }),

        price: joi.number().required().messages({
            "number.base": "price must be a number",
            "number.empty": "price is required"
        }),

        description: joi.string().required().messages({
            "string.base": "description must be a string",
            "string.empty": "description is required"
        }),
        facilities: joi.string().required().messages({
            "string.base": "facilities must be a string",
            "string.empty": "facilities is required"
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


export default RoomValidations;