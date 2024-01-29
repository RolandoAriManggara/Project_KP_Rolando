"use client"

import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import bcrypt from "bcryptjs";

const AddMapel = () => {
    const [namapel, setNamapel] = useState('')
    const [nik, setNik] = useState('')
    const [namaguru, setNamaguru] = useState('')
    const [status, setStatus] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {

        e.preventDefault()
        await axios.post('/api/mapel', {
            namapel: namapel,
            nik: nik,
            namaguru: namaguru,
            status: status,
        })
        setNamapel('')
        setNik('')
        setNamaguru('')
        setStatus('')
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={handleModal}>Tambah Mata Pelajaran</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Tambah Mapel</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label font-bold">Nama Mapel</label>
                            <input type="text" value={namapel} onChange={(e) => setNamapel(e.target.value)} className="input input-bordered" placeholder="Nama Mapel" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">NIP</label>
                            <input type="number" value={nik} onChange={(e) => setNik(e.target.value)} className="input input-bordered" placeholder="NIP" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Nama Guru</label>
                            <input type="text" value={namaguru} onChange={(e) => setNamaguru(e.target.value)} className="input input-bordered" placeholder="Nama Guru" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Status</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} className="input input-bordered">
                                <option value="" disabled>--Pilih Status--</option>
                                <option value="ASN">ASN</option>
                                <option value="PPPK">PPPK</option>
                                <option value="Honor">Honor</option>
                                <option value="Tidak Ada">Tidak Ada</option>
                            </select>
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

export default AddMapel
