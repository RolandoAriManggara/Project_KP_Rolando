"use client"

import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import bcrypt from "bcryptjs";

const AddPegawai = () => {
    const [nik, setNik] = useState('')
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [jeniskelamin, setJeniskelamin] = useState('')
    const [agama, setAgama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [password, setPassword] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {

        e.preventDefault()
        const hashedPassword = await bcrypt.hash(password, 10);
        await axios.post('/api/pegawai', {
            nik: nik,
            nama: nama,
            email: email,
            jeniskelamin: jeniskelamin,
            agama: agama,
            alamat: alamat,
            jabatan: jabatan,
            password: hashedPassword
        })
        setNik('')
        setNama('')
        setEmail('')
        setJeniskelamin('')
        setAgama('')
        setAlamat('')
        setPassword('')
        setJabatan('')
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={handleModal}>Tambah Pegawai</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Tambah Pegawai Baru</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label font-bold">NIP</label>
                            <input type="number" value={nik} onChange={(e) => setNik(e.target.value)} className="input input-bordered" placeholder="NIP" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Nama Lengkap</label>
                            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="input input-bordered" placeholder="Nama Lengkap" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" placeholder="Email" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Jenis Kelamin</label>
                            <select value={jeniskelamin} onChange={(e) => setJeniskelamin(e.target.value)} className="input input-bordered">
                                <option value="" disabled>--Pilih Jenis Kelamin--</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Agama</label>
                            <select value={agama} onChange={(e) => setAgama(e.target.value)} className="input input-bordered">
                                <option value="" disabled>--Pilih Agama--</option>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Khatolik">Khatolik</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                                <option value="Khonghucu">Khonghucu</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Alamat</label>
                            <textarea onChange={(e) => setAlamat(e.target.value)}
                                className="input input-bordered h-20" placeholder="Alamat"></textarea>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Status</label>
                            <select value={jabatan} onChange={(e) => setJabatan(e.target.value)} className="input input-bordered">
                                <option value="" disabled>--Pilih Status--</option>
                                <option value="ASN">ASN</option>
                                <option value="PPPK">PPPK</option>
                                <option value="Honor">Honor</option>
                                <option value="Tidak Ada">Tidak Ada</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered" placeholder="Password" />
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

export default AddPegawai
