import Form from "next/form";
import SearchFormReset from "@/app/components/searchFormReset"
import { Search } from "lucide-react";

const searchForm = ({query}:{query?:string}) => {
    
    return (
        <Form action='/' scroll={false} className="search-form">
            <input
                name='query'
                defaultValue={query}
                className='search-input'
                placeholder="Search Startups">
            </input>

            <div className="flex gap-2">
                {query && <SearchFormReset/>}

                <button type="submit" className="search-btn text-white">
                    <Search className="size-5"></Search>
                </button>
            </div>
        </Form>
    )
}

export default searchForm