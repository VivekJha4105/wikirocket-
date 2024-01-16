'use client'

import Link from "next/link";
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string },
    reset: () => void,
}) {

    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <div>
            <h2 className="text-3xl">Something Went Wrong!</h2>
            <button className="m-2 p-4 text-2xl text-red-700 bg-slate-700 rounded-lg drop-shadow-lg" onClick={() => reset()}>Try Again</button><Link href={"/"}>or Go Back Home</Link>
        </div>
    )
}