import {useContext} from "react";
import {StyledCategory} from "./StyledCategory";
import {Button} from "../Button/Button";
import {categories, SearchContext} from "../../pages/Home";

export function Category() {
  const {categoryId, setCategoryId, setCurrentPage} = useContext(SearchContext);

  function handleOnChangeCategory(index) {
    setCategoryId(index);
    setCurrentPage(1);
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