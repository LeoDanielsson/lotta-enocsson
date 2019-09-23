import { useState, useRef } from 'react';
import useLazy from '../utils/useLazy';

export default ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();
  useLazy(ref, () => setLoaded(true));
  return (
    <picture ref={ref}>
      {loaded && (
        <source
          media='(max-width: 450px)'
          srcSet={`${src}?nf_resize=fit&w=450`}
        />
      )}
      <img key={src} src={loaded ? `${src}?nf_resize=fit&w=600` : ''} />
    </picture>
  );
};
