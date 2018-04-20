import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { definitions } from '.';

const styles = StyleSheet.create({
  paginator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    borderTop: `1px solid ${definitions.colors.black}`,
    width: '90%',
    marginLeft: '5%',
  },
  pageIndicator: {
    width: '200px',
    textAlign: 'center',
  },
  clickers: {
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: '28px',
  },
  inactive: { pointerEvents: 'none' }
});

interface IPaginatorProps {
  className?: string;
  page: number;
  maxPage: number;
  changePage: (delta: number) => void;
}

const Paginator = ({
  className,
  page,
  maxPage,
  changePage
}: IPaginatorProps) => {
  const Clicker = ({ value }: { value: number }) => (
    <a
      className={css(
        styles.clickers,
        (
          value < 0 && page === 0 ||
          value > 0 && page + 1 === maxPage
        ) && styles.inactive,
      )}
      onClick={() => changePage(value)}
    >
      {
        value < 0
          ? `${Math.abs(value)}<`
          : `>${value}`
      }
    </a>
  );
  return (
    <div className={css(styles.paginator) + ' ' + className}>
      <Clicker value={-10} />
      <Clicker value={-1} />
      <h1 className={css(styles.pageIndicator)}>{page + 1}/{maxPage}</h1>
      <Clicker value={1} />
      <Clicker value={10} />
    </div>
  );
};

export default Paginator;