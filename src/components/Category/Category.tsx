import {categories} from "../../config";
import {changeCategoryId, selectCategory} from "../../redux/slices/filterSlice";
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

import {Button} from "../Button/Button";
import {StyledCategory} from "./StyledCategory";


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