import { PrismaClient } from "@prisma/client"
import AddMapel from "./AddMapel";
import UpdateMapel from "./UpdateMapel";
import DeleteMapel from "./DeleteMapel";

const prisma = new PrismaClient();

const getMapels = async () => {
    const res = await prisma.mapel.findMany({
        select:{
            id: true,
            namapel: true,
            nik: true,
            namaguru: true,
            status: true,
        }
    });
    return res;
}

const Mapel = async () => {
    const [mapels] = await Promise.all([getMapels()]);
  return (
    <div>
        <div className="mb-5">
            <AddMapel />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Mapel</th>
                    <th>NIP</th>
                    <th>Nama Guru</th>
                    <th>Status</th>
                    <th className="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {mapels.map((mapel, index)=>(
                    <tr key={mapel.id}>
                        <td>{index + 1}</td>
                        <td>{mapel.namapel}</td>
                        <td>{mapel.nik}</td>
                        <td>{mapel.namaguru}</td>
                        <td>{mapel.status}</td>
                        <td className="flex justify-center space-x-1">
                            <UpdateMapel mapel={mapel} />
                            <DeleteMapel mapel={mapel}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Mapel
