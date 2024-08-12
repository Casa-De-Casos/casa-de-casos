'use server'

import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const createCheckoutSession = async ({configId}: {configId: string})  => {

    const configuration = await db.configuration.findUnique({
        where: {id: configId},
    })

    if (!configuration){
        throw new Error('No such configurations found')
    }

    const {} = getKindeServerSession()
}