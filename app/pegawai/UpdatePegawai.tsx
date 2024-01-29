"use client"
import { useState, SyntheticEvent } from "react"
// import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Pegawai = {
    id: number;
    nik: string;
    nama: string;
    email: string;
    jeniskelamin: string;
    agama: string;
    alamat: string;
    jabatan: string;
};

const UpdatePegawai = ({pegawai}: {pegawai: Pegawai}) => {
    const [nik, setNik] = useState(pegawai.nik)
    const [nama, setNama] = useState(pegawai.nama)
    const [email, setEmail] = useState(pegawai.email)
    const [jeniskelamin, setJeniskelamin] = useState(pegawai.jeniskelamin)
    const [agama, setAgama] = useState(pegawai.agama)
    const [alamat, setAlamat] = useState(pegawai.alamat)
    const [jabatan, setJabatan] = useState(pegawai.jabatan)

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    
    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.patch(`/api/pegawai/${pegawai.id}`, {
            nik: nik,
            nama: nama,
            email: email,
            jeniskelamin: jeniskelamin,
            agama: agama,
            alamat: alamat,
            jabatan: jabatan,
        });
        alert("Pegawai berhasil diedit");
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
                <h3 className="font-bold text-lg">Edit Data Pegawai</h3>
                <form onSubmit={handleUpdate}>
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
                        <textarea
                            onChange={(e) => setAlamat(e.target.value)}
                            className="input input-bordered h-20"
                            placeholder="Alamat Lengkap"
                            value={alamat}
                        >{alamat}</textarea>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Jabatan</label>
                        <select value={jabatan} onChange={(e) => setJabatan(e.target.value)} className="input input-bordered">
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

export default UpdatePegawai
