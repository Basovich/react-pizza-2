import { useCallback } from "react";
import { selectCart } from "../../redux/cart/selectors";
import { changeCart } from "../../redux/cart/slice";
import { CartInterface } from "../../redux/cart/types";
import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { EmptyCart} from "./EmptyCart";
import { Title, Button, LinkButton, CartPizza } from "../../components/";
import {
  StyledClearCartButton,
  StyledCartHead,
  StyledCartHeadTitle,
  StyledCart,
  StyledCartTotal,
  StyledCartBottom
} from "./StyledCart";


export default function Cart() {
  const cart = useAppSelector(selectCart);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleOnClickClearCart = useCallback(() => {
    dispatch(changeCart({
      pizzas: [],
      totalPrice: 0,
      totalCount: 0
    } as CartInterface))
  }, [dispatch])

  return (
    <StyledCart>
        {
          cart.pizzas.length
            ? <>
              <StyledCartHead>
                <StyledCartHeadTitle>
                  <svg className="title-icon" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z" stroke="#3F3F3F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z" stroke="#3F3F3F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825" stroke="#3F3F3F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <Title>
                    Cart
                  </Title>
                </StyledCartHeadTitle>
                <StyledClearCartButton
                  onClick={handleOnClickClearCart}
                  type="button"
                >
                  <svg className="basket-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Clear basket
                </StyledClearCartButton>
              </StyledCartHead>
              {cart.pizzas.map((pizza) => <CartPizza key={`${pizza.id}-${pizza.typePizza}-${pizza.sizePizza}}`} {...pizza} />)}
              <StyledCartTotal>
                <div className="total">
                  <p className="total-label">
                    Total pizzas:
                  </p>
                  <p className="total-count">
                    {cart.totalCount} un.
                  </p>
                </div>
                <div className="total">
                  <p className="total-label">
                    Order amount:
                  </p>
                  <p className="total-price">
                    {cart.totalPrice} $
                  </p>
                </div>
              </StyledCartTotal>
              <StyledCartBottom>
                <LinkButton
                  $btnLinkType='primary'
                  to={'/'}
                  state={{ ...filter }}
                >
                  <svg className="icon" width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25409 9.49689L12.189 2.88491C12.5057 2.61888 12.7041 2.23819 12.7407 1.82619C12.7773 1.41419 12.6492 1.00447 12.3844 0.686754C12.1195 0.369035 11.7396 0.16921 11.3277 0.131038C10.9159 0.0928651 10.5057 0.219456 10.187 0.48309L0.81156 8.29595C0.635764 8.44282 0.494357 8.6265 0.397324 8.83401C0.300291 9.04152 0.249998 9.2678 0.249998 9.49688C0.249998 9.72595 0.300291 9.95223 0.397324 10.1597C0.494357 10.3673 0.635764 10.5509 0.81156 10.6978L10.1869 18.5106C10.5055 18.7755 10.9162 18.9032 11.3288 18.8654C11.7414 18.8277 12.1222 18.6278 12.3875 18.3095C12.6527 17.9913 12.7808 17.5807 12.7436 17.1681C12.7064 16.7555 12.5069 16.3745 12.189 16.1088L4.25409 9.49689Z" />
                  </svg>
                  Back
                </LinkButton>
                <Button
                  $btnType='primary-orange'
                  type={'button'}
                >
                  Pay Now
                </Button>
              </StyledCartBottom>
            </>
            : <EmptyCart />
        }
  </StyledCart>
  )
}