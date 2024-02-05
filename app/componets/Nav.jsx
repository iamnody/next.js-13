import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>Next.js</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </nav>
  )
}
export default Nav
