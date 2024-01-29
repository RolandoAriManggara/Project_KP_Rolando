import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Tugas } from "@prisma/client";
const prisma = new PrismaClient()

export const POST = async (request: Request) => {
    const body: Tugas = await request.json();
    const tugas = await prisma.tugas.create({
        data:{
            nik: body.nik,
            nama: body.nama,
            tugastambah: body.tugastambah,
            stat: body.stat,
            jabatan: body.jabatan,
        }
    });
    return NextResponse.json(tugas, {status: 201})
}