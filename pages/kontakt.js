import Layout from '../components/Layout';
import content from '../content/pages/contact.md';

const {
  name,
  streetAddress,
  postalCode,
  city,
  phoneNumber,
  email,
  links
} = content.attributes;

export default () => (
  <Layout title='Kontakt'>
    <h1>Kontakt</h1>
    <div className='grid'>
      <address>
        <div>
          <div>{name}</div>
          <div>{streetAddress}</div>
          <div>
            {postalCode} {city}
          </div>
        </div>
        <p>
          <span>Telefon: </span>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </p>
        <p>
          <span>E-post: </span>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <h2>Länkar</h2>
        <ul>
          {links &&
            links.map(link => (
              <li key={link.url}>
                <a href={link.url} target='_blank'>
                  {link.text}
                </a>
              </li>
            ))}
        </ul>
      </address>
      <img src='/static/kontakt.jpg' alt='' />
    </div>
    <style jsx>{`
      address {
        max-width: 1200px;
        font-style: normal;
        text-align: left;
      }

      @media (min-width: 900px) {
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>
  </Layout>
);
