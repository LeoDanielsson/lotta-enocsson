import Layout from '../components/Layout';
import content from '../content/pages/sculptures.md';

export default () => {
  const { title, sculptures } = content.attributes;
  return (
    <Layout>
      <h1>{title}</h1>
      <div className='gallery'>
        {sculptures.map(sculpture => (
          <div className='item'>
            <img src={sculpture.image} />
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
