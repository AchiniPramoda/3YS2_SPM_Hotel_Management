const Foods = require('../model/foodModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const foodCtrl = {
    getFoods: async(req, res) =>{
        try {
            const features = new APIfeatures(Foods.find(), req.query)
            .filtering().sorting().paginating()

            const foods = await features.query

            res.json({
                status: 'success',
                result: foods.length,
                foods: foods
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createFood: async(req, res) =>{
        try {
            const { title, price, description, images, category} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            // const food = await Foods.findOne({pakage_id})
            // if(pakage)
            //     return res.status(400).json({msg: "This pakage already exists."})

            const newFood = new Foods({
                 title: title.toLowerCase(), price, description, images, category
            })

            await newFood.save()
            res.json({msg: "Created a Food"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteFood: async(req, res) =>{
        try {
            await Foods.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Food"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateFood: async(req, res) =>{
        try {
            const {title, price, description, images, category} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Foods.findOneAndUpdate({_id:req.params.id}, {
                title: title.toLowerCase(), price, description, images, category
            })

            res.json({msg: "Updated a Food"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = foodCtrl

