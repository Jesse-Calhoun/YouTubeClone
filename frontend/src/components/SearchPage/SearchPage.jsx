import SearchBar from '../SearchBar/SearchBar'
import axios from 'axios';

const SearchPage = ({}) => {

    async function getVideoResults() {
        let url = 'TODO';
        let response = await axios.get(url);
        
    }


    return ( 
        <div>
            <SearchBar/>
        </div>
     );
}
 
export default SearchPage;