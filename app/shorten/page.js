"use client"

import React, { use } from 'react'
import { useState } from 'react';
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

    return (
        <div className='mx-auto  bg-blue-100 max-w-lg my-16 p-8 rounded-2xl flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>

                <input ref={input1}  onKeyDown={(e) => handleKeyDown(e, input2)} value={url} className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />

                <input ref={input2} onKeyDown={(e) => handleKeyDown(e, submit)} value={shorturl} className='p-2 px-4 bg-white rounded-lg focus:outline-blue-500' type="text" placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
                <button ref={submit} onClick={generate} className='rounded-lg p-2 mt-3 bg-blue-600 text-white'>Generate</button>
            </div>

            {generated && <>
                <span className='font-bold'> Your Link:</span> <code><Link href={generated} target='_blank'>{generated}</Link>
                </code>
            </>}

        </div>
    )
}

export default Shorten


