import { PrismaClient } from "@prisma/client"
import AddPegawai from "./AddPegawai";
import UpdatePegawai from "./UpdatePegawai";
import DeletePegawai from "./DeletePegawai";

const prisma = new PrismaClient();

const getPegawais = async () => {
    const res = await prisma.pegawai.findMany({
        select:{
            id: true,
            nik: true,
            nama: true,
            email: true,
            jeniskelamin: true,
            agama: true,
            alamat: true,
            jabatan: true,
        }
    });
    return res;
}

const Pegawai = async () => {
    const [pegawais] = await Promise.all([getPegawais()]);
  return (
    <div>
        <div className="mb-5">
            <AddPegawai />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>NIP</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Agama</th>
                    <th>Alamat</th>
                    <th>Jenis Kelamin</th>
                    <th>Jabatan</th>
                    <th className="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {pegawais.map((pegawai, index)=>(
                    <tr key={pegawai.id}>
                        <td>{index + 1}</td>
                        <td>{pegawai.nik}</td>
                        <td>{pegawai.nama}</td>
                        <td>{pegawai.email}</td>
                        <td>{pegawai.agama}</td>
                        <td>{pegawai.alamat}</td>
                        <td>{pegawai.jeniskelamin}</td>
                        <td>{pegawai.jabatan}</td>
                        <td className="flex justify-center space-x-1">
                            <UpdatePegawai pegawai={pegawai} />
                            <DeletePegawai pegawai={pegawai}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Pegawai
