import { grey } from '../colors';

export default () => (
  <footer>
    <address>
      <div>Lotta Enocsson</div>
      <div>
        <span>Telefon: </span>
        <a href='tel:0701234567'>070-123 45 67</a>
      </div>
      <div>
        <span>E-post: </span>
        <a href='mailto:lottaenocsson@hotmail.com'>lottaenocsson@hotmail.com</a>
      </div>
    </address>
    <style jsx>{`
      footer {
        padding: 32px;
      }
      color: white;
      background-color: ${grey};
      address {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-style: normal;
      }
    `}</style>
  </footer>
);
