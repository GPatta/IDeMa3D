import {IoSearch} from 'react-icons/io5';

const SearchBox = () => {

    return (
        <div className='searchBox'>
            <input 
                type="text" 
                placeholder="Cerca..." 
            ></input>
            <IoSearch className='searchIcon' />
        </div>
    )
}

export default SearchBox