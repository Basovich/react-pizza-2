import { useSelector, useDispatch } from 'react-redux';
import {StyledCategory} from "./StyledCategory";
import {Button} from "../Button/Button";
import {categories} from "../../config";
import {changeCategoryId, selectCategory} from "../../redux/slices/filterSlice";

export function Category() {
  const categoryId = useSelector(selectCategory);
  const dispatch = useDispatch();

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