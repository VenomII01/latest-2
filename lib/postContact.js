import axios from "axios"
export default async function postContact() {
    const res = await axios.post('https://a3ttalsa-001-site4.atempurl.com/public/api/message')
    if (!res.ok) throw new Error(res.statusText)

    return res

}
