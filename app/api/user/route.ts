import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import type { Pegawai } from "@prisma/client";
const prisma = new PrismaClient()

export const POST = async (req: Request) => {
   try {
     const body = await req.json();
     const { nik, nama, email, password, jeniskelamin, agama, alamat, jabatan } = body;

     const existingUserByNik = await prisma.pegawai.findUnique({
       where: {nik: nik}
     });

     if(existingUserByNik) {
        return NextResponse.json({pegawai: null, message: "NIK ini sudah ada"}, {status: 409})
     }

     const existingUserByEmail = await prisma.pegawai.findUnique({
        where: { email: email }
     });

     if(existingUserByEmail) {
        return NextResponse.json({pegawai: null, message: "Email ini sudah ada"}, {status: 409})
     }

     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser = await prisma.pegawai.create({
        data: {
            nik,
            email,
            nama,
            jeniskelamin: body.jeniskelamin,
            agama: agama,
            alamat: alamat,
            jabatan: jabatan,
            password: hashedPassword
        }
     })

     return NextResponse.json( {pegawai: newUser, message: 'User berhasil didaftar'}, { status: 201 } );
   } catch (error) {
    
   }

}