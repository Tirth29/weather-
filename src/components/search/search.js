import {useState} from "react";
import { AsyncPaginate} from "react-select-async-paginate";

const Search = ({onSeachChange}) =>
{
    const [search,setSeach] = useState(null);

    const handleOnChange = (seachData) => {
        setSeach(seachData);
        onSeachChange(seachData);
    }
    
    return (
        <AsyncPaginate 
        placeholder="Search for a City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        />
    )
}

export default Search;
