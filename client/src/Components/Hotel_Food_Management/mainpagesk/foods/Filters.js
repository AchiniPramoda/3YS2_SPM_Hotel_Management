
import React, {useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import "../../../../../src/index.css"

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI1.categories
    const [category, setCategory] = state.foodsAPI.category
    const [search, setSearch] = state.foodsAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <row className='row1'>
        <column className="column-1">
                <button className='fil' >
                    <select name="category" value={category} onChange={handleCategory} >
                        {
                            categories.map(category => (
                                
                                <option value={"category=" + category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </button></column>
                            <column className='column-1'></column>
                            <column className='column-1'>
                <input type="text" className="search" value={search} placeholder="Search"
                onChange={e => setSearch(e.target.value.toLowerCase())} /></column>
            </row>
        
        
    )
}

export default Filters




