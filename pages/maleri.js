import Layout from '../components/Layout';
import { grey } from '../colors';

export default () => {
  const paintings = [
    'static/paintings/IMG_0032.JPG',
    'static/paintings/IMG_0757.JPG',
    'static/paintings/IMG_2002.JPG',
    'static/paintings/IMG_2094.JPG',
    'static/paintings/IMG_2096.JPG',
    'static/paintings/IMG_2338.JPG',
    'static/paintings/IMG_2406.JPG',
    'static/paintings/IMG_2444.JPG',
    'static/paintings/IMG_2490.JPG',
    'static/paintings/IMG_2621.JPG',
    'static/paintings/IMG_2634.JPG',
    'static/paintings/IMG_2636.JPG',
    'static/paintings/IMG_5878.JPG',
    'static/paintings/IMG_7207.JPG',
    'static/paintings/IMG_7208.JPG',
    'static/paintings/IMG_7213.JPG',
    'static/paintings/IMG_7218.JPG',
    'static/paintings/IMG_7220.JPG'
  ];
  return (
    <Layout>
      <h1>Måleri</h1>
      <div className='gallery'>
        {paintings.map(url => (
          <div className='item'>
            <a href={url} target='_blank'>
              <img src={url} />
            </a>
            <small>Gryning, olja, 45x45cm</small>
          </div>
        ))}
      </div>
      <style jsx>{`
        display: flex;
        justify-content: center;

        .gallery {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 64px;
        }
        .item {
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          max-width: 600px;
          margin: 0 auto;
        }
        small {
          color: ${grey};
          align-self: flex-end;
          margin-top: 8px;
        }
        img {
          width: 100%;
          margin: 0;
        }
        button {
          background: none;
          color: white;
          border: none;
          position: absolute;
          right: -30px;
          bottom: 0;
        }
      `}</style>
    </Layout>
  );
};
