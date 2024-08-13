import React from 'react'

export default async function getAbout() {

    const res = await fetch(`https://a3ttalsa-001-site4.atempurl.com/public/api/about`, {

    });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data

}
