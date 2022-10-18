import {useState, useEffect} from 'react'
import axios from 'axios'

function PakagesAPI() {
    const [pakages, setPakages] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getPakages = async () => {
            const res = await axios.get(`/api/pakages`)
            setPakages(res.data.pakages)
            setResult(res.data.result)
        }
        getPakages()
    },[callback, category, sort, search, page])
    
    return {
        pakages: [pakages, setPakages],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default PakagesAPI


