import Layout from '../components/Layout';
import content from '../content/pages/startpage.md';
import Link from 'next/link';

export default () => {
  const {
    attributes: { title, subtitle, images },
    html
  } = content;
  return (
    <Layout
      title='Lotta Enocsson'
      metaTitle='Lotta Enocsson - Målare och skulptör i Stockholm'
    >
      <h1>{title}</h1>
      <div className='teaser'>{subtitle}</div>
      <div
        className='presentation'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className='body'>
        <div className='gallery'>
          {images.map(src => (
            <picture key={src}>
              <source
                media='(min-width: 0px)'
                srcSet={`${src}?nf_resize=fit&w=450`}
              />
              <source
                media='(min-width: 450px)'
                srcSet={`${src}?nf_resize=fit&w=650`}
              />
              <source
                media='(min-width: 650px)'
                srcSet={`${src}?nf_resize=fit&w=900`}
              />
              <source
                media='(min-width: 900px)'
                srcSet={`${src}?nf_resize=fit&w=1280`}
              />
              <img key={src} src={src} />
            </picture>
          ))}
        </div>
        <Link href='/malningar'>
          <a className='seeAll'>Se fler målningar</a>
        </Link>
      </div>

      <style jsx>{`
        .teaser {
          font-size: 24px;
          margin-bottom: 32px;
        }

        .seeAll {
          display: flex;
          justify-content: center;
        }

        @media (min-width: 600px) {
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

          .seeAll {
            justify-content: flex-start;
          }
        }
      `}</style>
    </Layout>
  );
};
