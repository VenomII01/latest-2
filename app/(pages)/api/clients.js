// pages/api/clients.js
export default async function handler(req, res) {
    try {
        const apiRes = await fetch('https://a3ttalsa-001-site4.atempurl.com/public/api/clients');
        if (!apiRes.ok) {
            throw new Error(apiRes.statusText);
        }

        const data = await apiRes.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching clients:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
