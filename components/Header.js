import Link from 'next/link';
import { useRouter } from 'next/router';
import { red, grey, eggshell } from '../colors';

const nav = [
  { text: 'Hem', href: '/' },
  { text: 'Utställningar', href: '/utstallningar' },
  { text: 'Skulptur', href: '/skulptur' },
  { text: 'Måleri', href: '/maleri' },
  { text: 'Offentliga verk', href: '/offentliga-verk' },
  { text: 'Kontakt', href: '/kontakt' }
];

export default () => {
  const { pathname } = useRouter();
  console.log('pathname :', pathname);
  return (
    <header>
      <nav>
        <ul>
          {nav.map(link => (
            <li key={link.text}>
              <Link href={link.href}>
                <a className={pathname === link.href ? 'active' : ''}>
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        background-color: ${grey};
        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin: 0;
        }
        li {
          margin: 0;
        }
        a {
          display: block;
          text-decoration: none;
          color: white;
          padding: 16px;
        }

        .active {
          background-color: ${eggshell};
          color: black;
        }
      `}</style>
    </header>
  );
};
