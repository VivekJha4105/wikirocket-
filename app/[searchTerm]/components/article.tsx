import Link from "next/link"

type Props = {
    result: Result,
}

export default function Article({ result }: Props) {
    return (
        <article className="flex flex-row justify-center mx-auto my-4 p-4 gap-3 bg-slate-500 w-1/2 rounded-lg shadow-lg hover:scale-105 transition-all">
            {result?.thumbnail ?
                <div className="flex items-center">
                    <img
                        className="w-full"
                        src={result?.thumbnail?.source}
                        alt={result?.title}
                        width={result?.thumbnail?.width}
                        height={result?.thumbnail?.height}
                        loading="lazy"
                    />
                </div> : ""
            }
            <div key={result.pageid} className="leading-5">
                <h1 className="md:text-2xl font-bold">{result.title}</h1>
                <p className="px-2">{result.extract}</p>
            </div>
        </article>

    )
}