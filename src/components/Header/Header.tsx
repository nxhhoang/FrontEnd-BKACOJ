import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/images/logo.jpg'
import Vietnam from '../../assets/images/vi_flag.svg'
import global from '../../assets/images/gb_flag.svg'
import discord from '../../assets/images/discord.svg'
import warning from '../../assets/images/warning.svg'
import type { ReactNode } from 'react'

interface NavLinkProps {
  to: string
  label: ReactNode
}

function NavItem({ to, label }: NavLinkProps) {
  return (
    <li>
      <Link to={to} className='no-underline text-inherit hover:text-sky-600'>
        {label}
      </Link>
    </li>
  )
}

function IconItem({ to, label }: NavLinkProps) {
  return (
    <li>
      <Link to={to} className='no-underline text-inherit hover:opacity-80'>
        {label}
      </Link>
    </li>
  )
}

export default function Header() {
  const leftLinks: NavLinkProps[] = [
    { to: '/', label: 'HOME' },
    { to: '/announcement', label: 'ANNOUNCEMENT' },
    { to: '/problem', label: 'PROBLEMSET' },
    { to: '/contest', label: 'CONTEST' },
    { to: '/about', label: 'ABOUT' }
  ]

  const iconLinks: NavLinkProps[] = [
    {
      to: 'https://discord.gg/vBZB6Cetqw',
      label: <img src={discord} alt='Discord Server' className='h-5 w-7 object-contain' />
    },
    { to: 'https://discord.gg/eqneT7ZVuY', label: <img src={warning} alt='warning' className='h-5 w-7 object-contain' /> },
    { to: '/VietNam', label: <img src={Vietnam} alt='Vietnam flag' className='h-5 w-7 object-contain' /> },
    { to: '/Global', label: <img src={global} alt='UK flag' className='h-5 w-7 object-contain' /> }
  ]

  const rightLinks: NavLinkProps[] = [
    { to: '/Login', label: 'LOGIN' },
    { to: '/Register', label: 'REGISTER' }
  ]

  return (
    <header className='bg-white px-5 py-2 flex items-center border-b border-gray-300 w-full box-border'>
      {/* Logo */}
      <div className='flex-shrink-0'>
        <Link to='/'>
          <img
            src={LOGO}
            alt='BKAC OJ'
            className='inline-block h-[4em] w-[4em] relative object-contain cursor-pointer'
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className='ml-6 border border-gray-300 rounded-md px-4 py-2'>
        <nav>
          <ul className='flex gap-4 list-none p-0 m-0'>
            {leftLinks.map((link, idx) => (
              <NavItem key={idx} to={link.to} label={link.label} />
            ))}
          </ul>
        </nav>
      </div>

      {/* Login link */}
      <div className='ml-auto flex items-center gap-4'>
        {/* Icons cụm riêng */}
        <nav>
          <ul className='flex gap-1 list-none p-0 m-0'>
            {iconLinks.map((link, idx) => (
              <IconItem key={idx} to={link.to} label={link.label} />
            ))}
          </ul>
        </nav>

        {/* Login/Register cụm riêng */}
        <div className='border border-gray-300 rounded-md px-4 py-2'>
          <nav>
            <ul className='flex list-none p-0 m-0'>
              {rightLinks.map((link, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className='mx-2 text-gray-400'>|</span>}
                  <NavItem to={link.to} label={link.label} />
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
