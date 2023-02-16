import {useState} from "react";
import {StyledPizza} from "./StyledPizza";
import {Button} from "../Button/Button";

export function Pizza({imageUrl, name, about, types, sizes, prices}) {
  const [typePizza, setTypePizza] = useState(types[0]);
  const [sizePizza, setSizePizza] = useState(0);
  const [addedPizza, setAddedPizza] = useState(0);
  const [pricePizza, setPricePizza] = useState(prices[typePizza][0]);

  const handleOnClickTypePizza = (type) => {
    setTypePizza(type);
    setPricePizza(prices[type][sizePizza]);
  }

  const handleOnClickSizePizza = (size) => {
    setSizePizza(size);
    setPricePizza(prices[typePizza][size]);
  }

  return (
    <StyledPizza>
      <img src={imageUrl}
           className="pizza-img"
           alt=""
           loading={'lazy'}
      />
      <p className="pizza-title">
        {name}
      </p>
      <p className="pizza-compound">
        {about}
      </p>
      <div className="pizza-selector">
        <div className="pizza-selector-row">
          {
            types?.map((type, index) => (
              <button key={index}
                      className={type === typePizza ? 'pizza-selector-button active' : 'pizza-selector-button'}
                      type="button"
                      onClick={() => handleOnClickTypePizza(type)}
              >
                {type}
              </button>
            ))
          }
        </div>
        <div className="pizza-selector-row">
          {
            sizes?.map((size, index) => (
              <button key={index}
                      className={index === sizePizza ? 'pizza-selector-button active' : 'pizza-selector-button'}
                      type="button"
                      onClick={() => handleOnClickSizePizza(index)}
              >
                {size}
              </button>
            ))
          }
        </div>
      </div>
      <div className="pizza-footer">
        <div className="pizza-price">
          {pricePizza} $
        </div>
        <Button $btnType='addPizza'
                type={'button'}
                onClick={() => setAddedPizza(addedPizza + 1)}
        >
          <svg className="plus-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
          </svg>
          <span>Add to cart</span>
            {
              addedPizza
              ? <span className="counter">{addedPizza}</span>
              : null
            }
        </Button>
      </div>
    </StyledPizza>
  )
}