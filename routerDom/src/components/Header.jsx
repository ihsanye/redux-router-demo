import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to='/'>Anasayfa</Link>
            <Link to='/products'>Urunler</Link>
            <Link to='/contact'>Iletisim</Link>
            <Link to='/about'>Hakkinda</Link>
        </div>
    )
}

export default Header