import {StyledCategory} from "./StyledCategory";
import {Button} from "../Button/Button";
import {categories} from "../../pages/Home";

export function Category({id, onChange}) {
  return (
    <StyledCategory>
      {categories.map((category, index) => (
          <Button key={index}
                  $btnType={id === index ? 'primary' : 'secondary'}
                  type={'button'}
                  onClick={() => onChange(index)}
          >
            {category}
          </Button>
        )
      )}
    </StyledCategory>
  )
}