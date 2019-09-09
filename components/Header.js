import Link from 'next/link';
import { useRouter } from 'next/router';
import { red, grey, eggshell } from '../colors';

const nav = [
  { text: 'Hem', href: '/' },
  { text: 'CV', href: '/cv' },
  { text: 'Skulptur', href: '/skulptur' },
  { text: 'Måleri', href: '/maleri' },
  { text: 'Kontakt', href: '/kontakt' }
];

export default () => {
  const { pathname } = useRouter();
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
        max-width: 1200px;
        margin: 0 auto;
        ul {
          list-style: none;
          display: flex;
          margin: 0;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        ul::-webkit-scrollbar {
          display: none;
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
          border-bottom: 2px solid ${red};
        }
      `}</style>
    </header>
  );
};
