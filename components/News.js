const articleContext = require.context('../content/aktuellt');

export default () => {
  const articles = articleContext.keys().map(key => articleContext(key));
  return (
    <div className='newsfeed'>
      <h2>Aktuellt</h2>
      {articles.map(article => {
        const { attributes, html } = article;
        const { title } = attributes;
        return (
          <article className='article' key={title}>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        );
      })}
    </div>
  );
};
