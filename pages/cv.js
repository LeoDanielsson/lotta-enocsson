import Layout from '../components/Layout';
import content from '../content/pages/cv.md';

export default () => {
  const {
    attributes: { title, subtitle },
    html
  } = content;
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};
