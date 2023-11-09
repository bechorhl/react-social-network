import React, { useState } from 'react';
import styles from './Paginator.module.css';
import classNames from 'classnames';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(2);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          className={classNames(styles.buttonPrev, styles.button)}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      <ul className={styles.pageList}>
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((page) => (
            <li key={page} className={styles.pageItem}>
              <button
                onClick={() => {
                  onPageChanged(page);
                }}
                className={classNames(
                  { [styles.selectedPage]: currentPage === page },
                  styles.pageButton,
                  styles.button
                )}
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
      {portionCount > portionNumber && (
        <button
          className={classNames(styles.buttonNext, styles.button)}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
