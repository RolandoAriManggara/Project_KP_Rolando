import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Pegawai } from "@prisma/client";
const prisma = new PrismaClient()

export const POST = async (request: Request) => {
    const body: Pegawai = await request.json();
    const pegawai = await prisma.pegawai.create({
        data:{
            nik: body.nik,
            nama: body.nama,
            email: body.email,
            jeniskelamin: body.jeniskelamin,
            agama: body.agama,
            alamat: body.alamat,
            jabatan: body.jabatan,
            password: body.password,
        }
    });
    return NextResponse.json(pegawai, {status: 201})
}