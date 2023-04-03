import {categories} from "../../utils/staticData";
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {Button} from "../Button/Button";
import {StyledCategory} from "./StyledCategory";
import { selectCategory } from "../../redux/filter/selectors";
import { changeCategoryId } from "../../redux/filter/slice";

export function Category() {
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