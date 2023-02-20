import {useState} from "react";
import {StyledCategory} from "./StyledCategory";
import {Button} from "../Button/Button";

const categories = [
  'All',
  'Meat',
  'Vegetarian',
  'Grill',
  'Spicy',
  'Closed',
]

export function Category() {
  const [indexCategory, setIndexCategory] = useState(0);

  return (
    <StyledCategory>
      {categories.map((category, index) => (
          <Button key={index}
                  $btnType={indexCategory === index ? 'primary' : 'secondary'}
                  type={'button'}
                  onClick={() => setIndexCategory(index)}
          >
            {category}
          </Button>
        )
      )}
    </StyledCategory>
  )
}