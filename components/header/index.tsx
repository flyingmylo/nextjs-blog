import Link from 'next/link';
import style from './index.module.scss'
import { useRouter } from 'next/router'


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
    <header className={style.header}>
      <h1 className={style.logo}>
        <Link href="/">hi</Link>
      </h1>
      <ul className={style.list}>
        {
          nav.map(n => (
            <li key={n.path} className={pathname === n.path ? style.active : ''}>
              <Link href={n.path}>{n.label}</Link>
            </li>
          ))
        }

      </ul>
    </header>
  )

}