
export default async function GetJobs() {
    const res = await fetch('https://a3ttalsa-001-site4.atempurl.com/public/api/jobs', {
        next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error(res.statusText)
    const data = await res.json()
    return data
}
