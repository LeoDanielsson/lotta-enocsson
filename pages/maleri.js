import Layout from '../components/Layout';
import { grey } from '../colors';
import content from '../content/pages/paintings.md';
import Gallery from '../components/Gallery';

export default () => {
  const { title, paintings } = content.attributes;

  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <Gallery items={paintings} />
      <style jsx>{`
        display: flex;
        justify-content: center;
      `}</style>
    </Layout>
  );
};
