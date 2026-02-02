import { useEffect, useState } from 'react'
import api from '../api/axios'

function Banner() {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    api.get('/banners')
      .then(res => {
        setBanners(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  if (banners.length === 0) return null

  return (
    <div>
      {banners.map(banner => (
        <div
          key={banner.id}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px',
            color: 'white',
          }}
        >
          <h1>{banner.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Banner
