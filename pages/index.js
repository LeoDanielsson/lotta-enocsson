import Layout from '../components/Layout';
import { gold } from '../colors';
import content from '../content/pages/startpage.md';

export default () => {
  const {
    attributes: { title, subtitle, images },
    html
  } = content;
  return (
    <Layout>
      <h1>{title}</h1>
      <div className='teaser'>{subtitle}</div>
      <div
        className='presentation'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className='body'>
        <div className='gallery'>
          {images.map(src => (
            <img key={src} src={src} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .teaser {
          font-size: 24px;
          margin-bottom: 32px;
        }

        .presentation {
          margin-bottom: 64px;
        }

        .article {
          border-top: 1px solid ${gold};
          padding-top: 24px;
          margin-bottom: 32px;
        }

        @media (min-width: 900px) {
          .presentation {
            display: flex;
            justify-content: space-between;
          }

          .presentation * {
            margin: 0;
          }

          .presentation picture {
            margin-left: 16px;
          }

          .body {
          }

          .gallery {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 32px;
          }
        }
      `}</style>
    </Layout>
  );
};
