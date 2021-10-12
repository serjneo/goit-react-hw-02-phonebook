function Filter({value, onChange}) {
    return (
        <input type="text" name="filter" onChange={onChange} value={value}></input>
    )
}

export default Filter;