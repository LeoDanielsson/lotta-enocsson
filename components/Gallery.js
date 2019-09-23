import { grey } from '../colors';
import Picture from './Picture';

export default ({ items }) => (
  <div className='gallery'>
    {items.map(item => (
      <div key={item.name} className='item'>
        <a href={item.image} target='_blank'>
          <Picture
            src={item.image}
            alt={`${item.name} - ${item.description}`}
          />
        </a>
        {item.description && <small>{item.description}</small>}
      </div>
    ))}
    <style jsx>{`
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
        min-height: 300px;
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
    `}</style>
  </div>
);
