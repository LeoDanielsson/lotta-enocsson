import Layout from '../components/Layout';
import News from '../components/News';
import { grey, gold, red, lightRed } from '../colors';
import content from '../content/pages/startpage.md';

export default () => {
  const {
    attributes: { title, subtitle, images },
    html
  } = content;
  console.log('images :', images);
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
          <img src='/static/paintings/IMG_2094.JPG' />
          <img src='/static/paintings/IMG_2636.jpg' />
          <img src='/static/paintings/IMG_2338.jpg' />
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
