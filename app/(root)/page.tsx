import SearchForm from "@/app/components/searchForm";

export default function Home() {
  return (
    <div>
      <section className="w-full bg-[#ed4c84] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6;">
        <h1 className="uppercase bg-black px-6 py-3 font-mono font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 w-full">
          Pitch Your Startup, <br/>
          Connect With Entrepreneurs
        </h1>

        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm/>
      </section>
      
      
    </div>
  );
}
