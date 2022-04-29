import Link from 'next/link';
import style from './index.module.scss'


export default function Header() {

  return (
    <header className={style.header}>
      <h1 className={style.logo}>Mylo :)</h1>
      <ul className={style.list}>
        <li><Link href="/about">关于</Link></li>
        <li><Link href="/tag">标签</Link></li>
        <li><Link href="/archive">归档</Link></li>
      </ul>
    </header>
  )
}