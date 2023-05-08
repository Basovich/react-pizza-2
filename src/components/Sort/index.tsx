import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { sorts } from '../../utils/staticData';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectSortType } from '../../redux/filter/selectors';
import { changeSort } from '../../redux/filter/slice';
import { StyledSort } from './StyledSort';
import { DocumentClickType } from './types';

const SortList = lazy(() => import( /* webpackChunkName: "SortList" */'./SortList'));

export const Sort: React.FC = () => {
  const refSort = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const sortType = useAppSelector(selectSortType);
  const dispatch = useAppDispatch();

  const handlerOutsideClick = useCallback( (event: MouseEvent) => {
    const _event = event as DocumentClickType;
    // e.path none in Safari
    const path = _event.path || (_event.composedPath && _event.composedPath());

    if (refSort.current && !path.includes(refSort.current)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handlerOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handlerOutsideClick);
    };
  }, [handlerOutsideClick]);

  const handleOnClickSort = (name:string) => {
    dispatch(changeSort(name));
    setIsOpen(false);
  }

  return (
    <StyledSort ref={refSort}>
      <span className="sort-label">
        <svg className="sort-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
        </svg>
        Sort by:
      </span>
      <button onClick={() => setIsOpen(!isOpen)}
              className="sort-button" type={'button'}
      >
        {sortType}
      </button>
      {
        isOpen && (
          <Suspense fallback={''}>
            <SortList sorts={sorts} handleOnClickSort={handleOnClickSort} sortType={sortType} />
          </Suspense>
        )
      }
    </StyledSort>
  )
}