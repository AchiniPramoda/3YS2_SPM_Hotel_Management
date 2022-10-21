
import React, {useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
//import {Link} from 'react-router-dom'
function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.pakagesAPI1.category
    const [sort, setSort] = state.pakagesAPI.sort
    const [search, setSearch] = state.pakagesAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="kavi">
           

                <select name="category" value={category} onChange={handleCategory} >
         <option value=''>All Pakages</option>
      
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Enter your search" style={{color:"#000",  fontWeight:"bold"} }
            onChange={e => setSearch(e.target.value.toLowerCase())} />
            <div className="kavi">
                <span></span>

                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
    )
}

export default Filters




