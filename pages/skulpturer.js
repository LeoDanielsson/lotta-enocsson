import Layout from '../components/Layout';
import content from '../content/pages/sculptures.md';
import Gallery from '../components/Gallery';

export default () => {
  const { title, sculptures } = content.attributes;
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <Gallery items={sculptures} />
      <style jsx>{`
        display: flex;
        justify-content: center;
      `}</style>
    </Layout>
  );
};
