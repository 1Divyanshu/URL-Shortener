"use client"

import React, { use } from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRef } from 'react';


const Shorten = () => {
    const input1 = useRef(null);
    const input2 = useRef(null);
    const submit = useRef(null);

    const handleKeyDown = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault(); // prevent form submit
            nextRef?.current?.focus(); // move to next input
        }
    };

    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

    // Working of Generate button
    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    // Fetching the data from mongoDB sever
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("/api/getdata") 
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => setdata(data))
            .catch((err) => console.error(err));
    }, []);


    const handleDelete = async (id) => {
        if(confirm("Are you sure, you want to delete this link?")){
        try {
            const res = await fetch(`/api/delete/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // remove from frontend state
                setdata((prev) => prev.filter((l) => l._id !== id));
            } else {
                console.error("Delete failed:", await res.json());
            }
        } catch (error) {
            console.error("Error deleting link:", error);
        }}
        else{
            return
        }
    };



    return (
        <>
            <div className='mx-auto  bg-blue-100 max-w-lg my-16 p-8 rounded-2xl flex flex-col gap-4'>
                <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
                <div className='flex flex-col gap-2'>

                    <input ref={input1} onKeyDown={(e) => handleKeyDown(e, input2)} value={url} className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />

                    <input ref={input2} onKeyDown={(e) => handleKeyDown(e, submit)} value={shorturl} className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
                    <button ref={submit} onClick={generate} className='rounded-lg p-2 mt-3 bg-blue-600 text-white cursor-pointer'>Generate</button>
                </div>

                {generated && <>
                    <span className='font-bold'> Your Link:</span> <code><Link href={generated} rel="noopener noreferrer" target='_blank'>{generated}</Link>
                    </code>
                </>}

            </div>

            {/* Table to display previosly stored links  */}
            <table className="w-[80%] text-left border-collapse border border-gray-300 mx-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border border-gray-300 text-center">Original URL</th>
                        <th className="p-2 border border-gray-300 text-center">Short URL</th>
                        <th className="p-2 border border-gray-300 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((link, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="p-2 border border-gray-300 truncate max-w-xs">{link.url}</td>
                            <td className="p-2 border border-gray-300">
                                <a
                                    href={`${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    {`${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`}
                                </a>
                            </td>
                            <td className="p-2 border border-gray-300 space-x-2 text-center">
                                <button
                                    onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`)}
                                    className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Copy
                                </button>
                                <button
                                    onClick={() => handleDelete(link._id)}
                                    className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}

export default Shorten


