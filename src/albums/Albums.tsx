import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Paginator, definitions } from '../shared';
import Filters from './Filters';
import AlbumsGrid from './AlbumsGrid';

const View = () => {
  const styles = StyleSheet.create({
    layoutGrid: {
      height: `calc(100vh - ${definitions.headerHeight})`,
      display: 'grid',
      gridTemplateColumns: 'minmax(20%, 200px) 1fr',
      gridTemplateRows: '1fr 60px',
      gridTemplateAreas: `
        "filter grid"
        "filter paginator"
      `,
      '@media (max-width: 860px)': {
        position: 'relative',
        overflow: 'hidden',
        gridTemplateAreas: `
        "grid"
        "paginator"
      `,
        gridTemplateColumns: '100%',
      },
    },
  });

  return (
    <div className={css(styles.layoutGrid)}>
      <Filters />
      <AlbumsGrid />
      <Paginator selector='albums' />
    </div>
  );
};

export default View;