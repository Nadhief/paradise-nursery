import { Navigate, Outlet } from 'react-router-dom'

const isAuthorized = false

const PrivateLayout = () => {
  if (!isAuthorized) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default PrivateLayout