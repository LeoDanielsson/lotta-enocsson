import Layout from '../components/Layout';
import { grey } from '../colors';
import content from '../content/pages/paintings.md';

export default () => {
  const { title, paintings } = content.attributes;

  return (
    <Layout>
      <h1>{title}</h1>
      <div className='gallery'>
        {paintings.map(painting => (
          <div className='item'>
            <a href={painting.image} target='_blank'>
              <img src={painting.image} />
            </a>
            <small>
              {painting.name} - {painting.description}
            </small>
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
