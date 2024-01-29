import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Pegawai } from "@prisma/client";
const prisma = new PrismaClient()

export const PATCH = async (request: Request, {params}: {params: {id: string}}) => {
    const body: Pegawai = await request.json();
    const pegawai = await prisma.pegawai.update({
        where:{
            id: Number(params.id)
        },
        data:{
            nik: body.nik,
            nama: body.nama,
            email: body.email,
            jeniskelamin: body.jeniskelamin,
            agama: body.agama,
            alamat: body.alamat,
            jabatan: body.jabatan,
        }
    });
    return NextResponse.json(pegawai, {status: 200})
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) => {
    const product = await prisma.pegawai.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200})
}