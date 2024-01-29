import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: 'Kelola Pegawai',
}

const PageLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <div>
        <Navbar/>
        <Sidebar>
          {children}
        </Sidebar> 
        <Footer/>
      </div>
  )
}

export default PageLayout