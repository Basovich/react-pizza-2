import { useSelector, useDispatch } from 'react-redux';
import {StyledCategory} from "./StyledCategory";
import {Button} from "../Button/Button";
import {categories} from "../../config";
import {changeCategoryId} from "../../redux/slices/filterSlice";

export function Category() {
  const categoryId = useSelector((state) => state.filter.category);
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