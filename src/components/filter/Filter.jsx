const Filter=({setFilterActive, setFindName,setSortByName})=>{
    return (<>
        <div>
            <input type="text" onChange={event=>setFindName(event.target.value)}/>
            <div>
                <label  name="only-active"  >Sólo activos</label>
                <input type="checkbox" id="only-active" onChange={event => setFilterActive(event.target.checked)}/>
            </div>
            <select name="sort" id="" onChange={event=>setSortByName(event.target.value)}>

                <option value="0">Por defecto</option>
                <option value="1">Por nombre</option>

            </select>

        </div>
    
    </>)
}
export default Filter