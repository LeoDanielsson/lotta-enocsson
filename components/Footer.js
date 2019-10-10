import { grey } from '../colors';

export default () => (
  <footer>
    <address>
      <div>Lotta Enocsson</div>
      <div>Ateljé Vinterviken hus 36</div>
      <div>117 65 Stockholm</div>
      <div className='phone'>
        <span>Telefon: </span>
        <a href='tel:0701234567'>073-624 92 85</a>
      </div>
      <div>
        <span>E-post: </span>
        <a href='mailto:lottaenocsson@hotmail.com'>lottaenocsson@hotmail.com</a>
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
