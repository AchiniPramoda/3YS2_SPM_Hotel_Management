import joi from "joi"

const StaffValidations = (validation) => {
    const schema = joi.object({
        
          
        firstname: joi.string().required().messages({
            "string.base": "First name must be a string",
            "string.empty": "First name is required"
        }),

        lastname: joi.string().required().messages({
            "string.base": "Last name must be a string",
            "string.empty": "Last name is required"
        }),

        staffId: joi.string().min(3).max(4).required().messages({
            
            "string.base": "RoomId must be a string",
            "string.empty": "RoomId is required",
            "string.min": "RoomId must be at least 3 characters",
            "string.max": "RoomId must be at most 4 characters"
        }),

        phone: joi.number().required().messages({
            "number.base": "Phone must be a number",
            "number.empty": "Phone is required"
        }),

        staffemail : joi.string().required().messages({
            "string.base": "email must be a string",
            "string.empty": "email is required",
            
        }),


        dateofbirth: joi.string().required().messages({
            "string.base": "Date of birth must be a string",
            "string.empty": "Date of birth is required"

        }),
   
       

        salary: joi.number().required().messages({
            "number.base": "salary must be a number",
            "number.empty": "salary is required"
        }),

        address: joi.string().required().messages({
            "string.base": "address must be a string",
            "string.empty": "address is required"
        }),

        comment: joi.string().required().messages({
            "string.base": "comment must be a string",
            "string.empty": "comment is required"
        }),

        possition: joi.string().required().messages({
            "string.base": "possition must be a string",
            "string.empty": "possition is required"
        }),

        wortype: joi.string().required().messages({
            "string.base": "wortype must be a string",
            "string.empty": "wortype is required"
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


export default StaffValidations;