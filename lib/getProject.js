import React from 'react'

export default async function GetProject(id) {
    const res = await fetch(`https://a3ttalsa-001-site4.atempurl.com/public/api/project?id=${id}`, {
        next: { revalidate: 0 },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data
}
