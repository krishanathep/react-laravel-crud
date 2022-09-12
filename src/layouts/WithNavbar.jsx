import Layout from '../components/Layout'
import { Outlet } from 'react-router-dom'

export default function WithNavbar() {
  return (
    <>
    <Layout>
        <Outlet/>
    </Layout>
    </>
  )
}
