import SearchForm from "@/app/components/searchForm";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;
  return (
    <div>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br/>
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query}/>
      </section>
      
      
    </div>
  );
}
