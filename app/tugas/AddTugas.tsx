"use client"

import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import bcrypt from "bcryptjs";

const AddTugas = () => {
    const [nik, setNik] = useState('')
    const [nama, setNama] = useState('')
    const [tugastambah, setTugastambah] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [stat, setStat] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {

        e.preventDefault()
        await axios.post('/api/tugas', {
            nik: nik,
            nama: nama,
            tugastambah: tugastambah,
            jabatan: jabatan,
            stat: stat,
        })
        setNik('')
        setNama('')
        setStat('')
        setTugastambah('')
        setJabatan('')
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={handleModal}>Tambah Tugas Tambahan</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Tambah Tugas</h3>
                    <form onSubmit={handleSubmit}>
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

export default AddTugas
