"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";

type Tugas = {
    id: number;
    nama: string;
    nik: string;
    tugastambah: string;
    stat: string;
    jabatan: string;
}

const DeleteTugas = ({tugas}: {tugas: Tugas}) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    
    const handleDelete = async (tugasId: number) => {
        await axios.delete(`/api/tugas/${tugasId}`);
        alert("Tugas berhasil dihapus");
        router.refresh();
        setIsOpen(false);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <button className="btn btn-error btn-sm" onClick={handleModal}>Delete</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <p className="font-bold text-lg">Kamu yakin ingin menghapus tugas punya <b>{tugas.nama}</b>?</p>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>No</button>
                        <button type="button" onClick={()=>handleDelete(tugas.id)} className="btn btn-primary">Yes</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteTugas
