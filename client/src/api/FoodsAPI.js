import {useState, useEffect} from 'react'
import axios from 'axios'

function FoodsAPI() {
    const [foods, setFoods] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getFoods = async () => {
            const res = await axios.get(`http://localhost:8345/api/foods?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setFoods(res.data.foods)
            setResult(res.data.result)
        }
        getFoods()
    },[callback, category, sort, search, page])
    
    return {
        foods: [foods, setFoods],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default FoodsAPI


