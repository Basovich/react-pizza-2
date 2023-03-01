import {useContext} from "react";
import {StyledCategory} from "./StyledCategory";
import {Button} from "../Button/Button";
import {categories, PizzasContext} from "../../pages/Home";

export function Category() {
  const {categoryId, setCategoryId} = useContext(PizzasContext);

  function handleOnChangeCategory(index) {
    setCategoryId(index);
  }

  return (
    <StyledCategory>
      {categories.map((category, index) => (
          <Button key={index}
                  $btnType={categoryId === index ? 'primary' : 'secondary'}
                  type={'button'}
                  onClick={() => handleOnChangeCategory(index)}
          >
            {category}
          </Button>
        )
      )}
    </StyledCategory>
  )
}