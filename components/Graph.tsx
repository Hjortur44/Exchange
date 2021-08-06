import React from 'react';

async function Graph() {
  const canRef = React.useRef(null);

  React.useEffect(() => {
    const curr = canRef?.current;
    const contx = curr?.getContext('2d');

    contx?.fillRect(0, 0, 100, 100);

  });
  return (<canvas ref={canRef}/>);
}

export default Graph;