import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    if (req.method==='GET')
    {
        const a = await prisma.user.findMany()
        res.status(200).json(a)
        
    }
    else
    {
        
        res.status(400).send('error')
    }

}
