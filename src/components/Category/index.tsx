import { categories } from '../../utils/staticData';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectCategory } from '../../redux/filter/selectors';
import { changeCategoryId } from '../../redux/filter/slice';
import { Button } from '../';
import { StyledCategory } from './StyledCategory';

export const Category: React.FC = () => {
  const categoryId = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  
  return (
    <StyledCategory>
      {categories.map((category, index) => (
          <Button key={index}
                  $btnType={categoryId === index ? 'primary' : 'secondary'}
                  type={'button'}
                  onClick={() => dispatch(changeCategoryId(index))}
          >
            {category}
          </Button>
        )
      )}
    </StyledCategory>
  )
}