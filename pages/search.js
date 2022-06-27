import Head from "next/head";
import { useRouter } from "next/router";
import HeaderSearch from "../components/HeaderSearch";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import fakeResponse from "../response";

export default function Search({ results }) {
    const router = useRouter()
  console.log(results);
  return (
    <div className="bg-white">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Header */}
      <HeaderSearch />
      {/* Search Results */}
      <SearchResults results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || '0'
  const data = useDummyData
    ? fakeResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term} &start=${startIndex}`
      ).then((response) => response.json());
  

  return {
    props: {
      results: data,
    },
  };
}
