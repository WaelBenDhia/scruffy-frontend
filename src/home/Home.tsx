import * as React from 'react';
import { State } from './types';
import { css } from 'aphrodite/no-important';
import styles from './styles';
import RatingHistogram from './RatingHistogram';

const View = (props: State) => (
  <div className={css(styles.root)}>
    <h1 className={css(styles.title)}>Scaruffi2.0</h1>
    <div className={css(styles.text)}>
      <p>
        In which I attempt to organize the award winning
        <br />music, film, political and scientific
        <br />historian Scaruffi's knowledge base of film and music.
      </p>
    </div>
    {
      props.failed
        // TODO: Display error message
        ? props.error.message
        // TODO: replace with loading indicator
        : props.loading
          ? 'Loading'
          : [
            <h1 key="stats">Statistics</h1>,
            <div key="counts" className={css(styles.flexRow)}>
              <div className={css(styles.counts)} >
                <span className={css(styles.label)}>Bands reviewed:</span>
                <span>{props.data.bandCount}</span>
                <span className={css(styles.label)}>Albums reviewed:</span>
                <span>{props.data.albumCount}</span>
              </div>
            </div>,
            <div key="histo" className={css(styles.flexRow)}>
              <RatingHistogram {...props.data.ratings} />
            </div>,
          ]
    }
  </div>
);

export default View;