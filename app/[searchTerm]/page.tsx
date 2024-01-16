import getWikiResults from "@/lib/getWikiResults"
import { Metadata } from "next";
import Article from "./components/article";
import Link from "next/link";

type Props = {
    params: { searchTerm: string },
}

export async function generatMetadata({ params: { searchTerm } }: Props) {

    const searchResultData: Promise<SearchResult> = getWikiResults(searchTerm);
    const searchResult = await searchResultData;

    const displayTerm = searchTerm.replaceAll("%20", " ");

    if (!searchResult?.query) {
        return {
            title: `Not Found`,
            description: `${searchTerm} Not Found`,
        }
    }

    const metadata: Metadata = {
        title: displayTerm,
        description: `Search Results for ${displayTerm}`,
    };

    return metadata;
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const searchResultData: Promise<SearchResult> = getWikiResults(searchTerm);
    const searchResult = await searchResultData;

    const results: Result[] | undefined = searchResult?.query?.pages;

    return (
        <main className="text-white">
            {results ?
                Object.values(results).map(result => (
                    <Link href={`https://en.wikipedia.org/?curid=${result?.pageid}`} key={result?.pageid}>
                        <Article result={result} />
                    </Link>
                ))
                :
                <section className="flex justify-center items-center min-h-screen">
                    <div className="w-1/2 bg-slate-700 rounded-lg drop-shadow-lg grid place-content-center">
                        <h1 className="text-3xl text-slate-300 font-bold p-4">No Search Results for: <span className="text-red-600 pl-2">{searchTerm}</span></h1>
                    </div>
                </section>
            }
        </main>
    )
}