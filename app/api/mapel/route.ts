import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Mapel } from "@prisma/client";
const prisma = new PrismaClient()

export const POST = async (request: Request) => {
    const body: Mapel = await request.json();
    const mapel = await prisma.mapel.create({
        data:{
            namapel: body.namapel,
            nik: body.nik,
            namaguru: body.namaguru,
            status: body.status,
        }
    });
    return NextResponse.json(mapel, {status: 201})
}