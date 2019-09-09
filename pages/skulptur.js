import Layout from '../components/Layout';

export default () => {
  const paintings = [
    'static/sculptures/_P1N2614.JPG',
    'static/sculptures/IMG_0704.JPG',
    'static/sculptures/IMG_0707.JPG',
    'static/sculptures/IMG_0733.JPG',
    'static/sculptures/IMG_0748.JPG',
    'static/sculptures/IMG_1003.JPG',
    'static/sculptures/IMG_2133.JPG',
    'static/sculptures/IMG_0906.JPG',
    'static/sculptures/IMG_0916.JPG',
    'static/sculptures/IMG_0917.JPG',
    'static/sculptures/IMG_0918.JPG',
    'static/sculptures/IMG_2258.JPG'
  ];
  return (
    <Layout>
      <h1>Skulptur</h1>
      <div className='gallery'>
        {paintings.map(url => (
          <div className='item'>
            <img src={url} />
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
          justify-content: center;
          max-width: 600px;
          margin: 0 auto;
        }
        img {
          width: 100%;
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
