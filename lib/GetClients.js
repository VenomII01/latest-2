import axios from "axios";

export default async function GetClients() {
    const res = await fetch('https://a3ttalsa-001-site4.atempurl.com/public/api/clients', {
        next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data
}
