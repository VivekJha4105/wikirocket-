'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function Search() {
    const [search, setsearch] = useState("");
    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setsearch("");
        router.push(`/${search}/`);
    }

    return (
        <form onSubmit={handleSubmit} className="w-max mx-2 my-2 md:my-0 flex gap-2">
            <input
                className="p-2 rounded-lg outline-none border-none text-black"
                type="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                placeholder="Search"
            />
            <button type="submit" className="px-2 bg-slate-400 rounded-lg hover:text-xl transition-all">🚀</button>
        </form>
    )
}