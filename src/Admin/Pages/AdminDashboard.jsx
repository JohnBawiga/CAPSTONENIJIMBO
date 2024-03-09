import React from 'react'
import AdminNavbar from '../Sidebar/AdminNavbar'
function AdminDasboards(adminID) {
  return (
    <div className='adminDasboards'>
      <AdminNavbar adminID={adminID} />
    </div>
  )
}

export default AdminDasboards