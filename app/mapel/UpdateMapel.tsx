"use client"
import { useState, SyntheticEvent } from "react"
// import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Mapel = {
    id: number;
    namapel: string;
    nik: string;
    namaguru: string;
    status: string;
};

const UpdateMapel = ({mapel}: {mapel: Mapel;}) => {
    const [namapel, setNamapel] = useState(mapel.namapel)
    const [nik, setNik] = useState(mapel.nik)
    const [namaguru, setNamaguru] = useState(mapel.namaguru)
    const [status, setStatus] = useState(mapel.status)

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    
    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.patch(`/api/mapel/${mapel.id}`, {
            namapel: namapel,
            nik: nik,
            namaguru: namaguru,
            status: status,
        });
        alert("Mapel berhasil diedit");
        router.refresh();
        setIsOpen(false);
    }
    const handleModal = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
        <button className="btn btn-info btn-sm" onClick={handleModal}>Edit</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Data Mapel</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-control w-full">
                        <label className="label font-bold">Nama Mapel</label>
                        <input type="text" value={namapel} onChange={(e) => setNamapel(e.target.value)} className="input input-bordered" placeholder="Nama Mapel" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">NIP</label>
                        <input type="text" value={nik} onChange={(e) => setNik(e.target.value)} className="input input-bordered" placeholder="NIP" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Nama Guru</label>
                        <input type="text" value={namaguru} onChange={(e) => setNamaguru(e.target.value)} className="input input-bordered" placeholder="Nama Guru" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Jabatan</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} className="input input-bordered">
                            <option value="" disabled>--Pilih Jabatan--</option>
                            <option value="ASN">ASN</option>
                            <option value="PPPK">PPPK</option>
                            <option value="Honor">Honor</option>
                            <option value="Tidak Ada">Tidak Ada</option>
                        </select>
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Close</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )

}

export default UpdateMapel
