import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Mapel } from "@prisma/client";
const prisma = new PrismaClient()

export const PATCH = async (request: Request, {params}: {params: {id: string}}) => {
    const body: Mapel = await request.json();
    const mapel = await prisma.mapel.update({
        where:{
            id: Number(params.id)
        },
        data:{
            namapel: body.namapel,
            namaguru: body.namaguru,
            nik: body.nik,
            status: body.status,
        }
    });
    return NextResponse.json(mapel, {status: 200})
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) => {
    const product = await prisma.mapel.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200})
}