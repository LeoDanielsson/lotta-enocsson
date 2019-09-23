import Layout from '../components/Layout';
import content from '../content/pages/startpage.md';

export default () => {
  const {
    attributes: { title, subtitle, images },
    html
  } = content;
  return (
    <Layout title='Lotta Enocsson'>
      <h1>{title}</h1>
      <div className='teaser'>{subtitle}</div>
      <div
        className='presentation'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className='body'>
        <div className='gallery'>
          {images.map(src => (
            <picture>
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
      </div>

      <style jsx>{`
        .teaser {
          font-size: 24px;
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
