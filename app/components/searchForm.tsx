import Form from "next/form";
import SearchFormReset from "@/app/components/searchFormReset"

const searchForm = () => {
    const query = "Test"
    
    return (
        <Form action='/' scroll={false} className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5">
            <input
                name='query'
                defaultValue={query}
                className='lex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none'
                placeholder="Search Startups">
            </input>

            <div className="flex gap-2">
                {query && <SearchFormReset/>}
            </div>
        </Form>
    )
}

export default searchForm