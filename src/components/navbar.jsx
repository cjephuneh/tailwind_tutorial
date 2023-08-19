import headerLogo from '../assets/images/header-logo.svg'
// import { hamburger } from '../assets/icons/hamburger'
const navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img 
            src={headerLogo}
            alt='header logo'
            width={130}
            height={29}
          />

          <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
            <li>Home</li>
          </ul>

        </a>
      </nav>
    </header>
  )
}

export default navbar 