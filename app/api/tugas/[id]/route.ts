import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Tugas } from "@prisma/client";
const prisma = new PrismaClient()

export const PATCH = async (request: Request, {params}: {params: {id: string}}) => {
    const body: Tugas = await request.json();
    const tugas = await prisma.tugas.update({
        where:{
            id: Number(params.id)
        },
        data:{
            nik: body.nik,
            nama: body.nama,
            tugastambah: body.tugastambah,
            stat: body.stat,
            jabatan: body.jabatan,
        }
    });
    return NextResponse.json(tugas, {status: 200})
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) => {
    const product = await prisma.tugas.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200})
}