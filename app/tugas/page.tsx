import { PrismaClient } from "@prisma/client"
import AddMapel from "./AddTugas";
import UpdateMapel from "./UpdateTugas";
import DeleteMapel from "./DeleteTugas";
import AddTugas from "./AddTugas";

const prisma = new PrismaClient();

const getTugass = async () => {
    const res = await prisma.tugas.findMany({
        select:{
            id: true,
            nama: true,
            nik: true,
            tugastambah: true,
            stat: true,
            jabatan: true
        }
    });
    return res;
}

const Tugas = async () => {
    const [tugass] = await Promise.all([getTugass()]);
  return (
    <div>
        <div className="mb-5">
            <AddTugas />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Status</th>
                    <th>Jabatan</th>
                    <th>Tugas Tambahan</th>
                    <th className="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {tugass.map((tugas, index)=>(
                    <tr key={tugas.id}>
                        <td>{index + 1}</td>
                        <td>{tugas.nama}</td>
                        <td>{tugas.nik}</td>
                        <td>{tugas.stat}</td>
                        <td>{tugas.jabatan}</td>
                        <td>{tugas.tugastambah}</td>
                        <td className="flex justify-center space-x-1">
                            <UpdateMapel tugas={tugas} />
                            <DeleteMapel tugas={tugas}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Tugas
