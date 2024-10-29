import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h3>About</h3>
            {/*child larda path ve to da / kullanilmaz, root algilar*/}
            <Link to='company'>Sirket Hakkinda</Link>
            <Link to='employee'>Calisanlar Hakkinda</Link>
            {/*nested page render edilmesi icin, parent sayfasinda en alta yazilir */}
            <Outlet />
        </div>
    )
}

export default About