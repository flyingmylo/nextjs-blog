import Link from 'next/link';
// import style from './index.module.scss'
import { StyledHeader } from './styles'

import { useRouter } from 'next/router'
import React from 'react';


export default function Header() {
  const { pathname } = useRouter()

  const nav = [
    {
      label: '关于',
      path: '/about'
    },
    {
      label: '标签',
      path: '/tag'
    },
    {
      label: '归档',
      path: '/archive'
    }
  ]
  return (
    <StyledHeader >
      <h1 className="logo">
        <Link href="/">hi</Link>
      </h1>
      <ul className="list">
        {
          nav.map(n => (
            <li key={n.path} className={pathname === n.path ? 'active' : ''}>
              <Link href={n.path}>{n.label}</Link>
            </li>
          ))
        }

      </ul>
    </StyledHeader>
  )

}