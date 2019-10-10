import { grey } from '../colors';
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
  <footer>
    <address>
      <div>{name}</div>
      <div>{streetAddress}</div>
      <div>
        {postalCode} {city}
      </div>
      <div className='phone'>
        <span>Telefon: </span>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </div>
      <div>
        <span>E-post: </span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </address>
    <style jsx>{`
      footer {
        padding: 32px 0;
        color: ${grey};
      }
      address {
        max-width: 1200px;
        padding: 8px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-style: normal;
      }
      .phone {
        margin-top: 8px;
      }
    `}</style>
  </footer>
);
