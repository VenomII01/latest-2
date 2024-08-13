
export default async function getHow() {

    const res = await fetch('https://a3ttalsa-001-site4.atempurl.com/public/api/howWeWork')
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data
}
