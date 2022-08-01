import { PeliculasGrid } from "../components/PeliculasGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 300);
    return <div>
        <Search></Search>
        <PeliculasGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>; 
}