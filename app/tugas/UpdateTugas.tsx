"use client"
import { useState, SyntheticEvent } from "react"
// import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Tugas = {
    id: number;
    nama: string;
    nik: string;
    tugastambah: string;
    stat: string;
    jabatan: string;
};

const UpdateTugas = ({tugas}: {tugas: Tugas}) => {
    const [nik, setNik] = useState(tugas.nik)
    const [nama, setNama] = useState(tugas.nama)
    const [tugastambah, setTugastambah] = useState(tugas.tugastambah)
    const [jabatan, setJabatan] = useState(tugas.jabatan)
    const [stat, setStat] = useState(tugas.stat)
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    
    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.patch(`/api/tugas/${tugas.id}`, {
            nik: nik,
            nama: nama,
            tugastambah: tugastambah,
            jabatan: jabatan,
            stat: stat,
        });
        alert("Tugas berhasil diedit");
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
                <h3 className="font-bold text-lg">Edit Data Tugas</h3>
                <form onSubmit={handleUpdate}>
                <div className="form-control w-full">
                            <label className="label font-bold">NIP</label>
                            <input type="number" value={nik} onChange={(e) => setNik(e.target.value)} className="input input-bordered" placeholder="NIP" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Nama</label>
                            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="input input-bordered" placeholder="Nama Lengkap" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Status</label>
                            <select value={stat} onChange={(e) => setStat(e.target.value)} className="input input-bordered">
                                <option value="" disabled>--Pilih Status--</option>
                                <option value="ASN">ASN</option>
                                <option value="PPPK">PPPK</option>
                                <option value="Honor">Honor</option>
                                <option value="Tidak Ada">Tidak Ada</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Jabatan</label>
                            <select value={jabatan} onChange={(e) => setJabatan(e.target.value)} className="input input-bordered">
                                <option value="" disabled>--Pilih Jabatan--</option>
                                <option value="Tata Usaha">Tata Usaha</option>
                                <option value="Guru BK">Guru BK</option>
                                <option value="Guru Mapel">Guru Mapel</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Tugas Tambahan</label>
                            <input type="text" value={tugastambah} onChange={(e) => setTugastambah(e.target.value)} className="input input-bordered" placeholder="Tugas Tambahan" />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>Tutup</button>
                            <button type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateTugas
