import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "../../components/Header/Header";
import {Title} from "../../components/Title/Title";
import {
  StyledClearCartButton,
  StyledCartHead,
  StyledCartHeadTitle,
  StyledCart,
  StyledCartTotal,
  StyledCartBottom,
  StyleEmptyCart
} from "./StyledCart";
import {CartPizza} from "../../components/CartPizza/CartPizza";
import {Button, LinkButton} from "../../components/Button/Button";
import {changeCart} from "../../redux/slices/cartSlice";


export function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOnClickClearCart = useCallback(() => {
    dispatch(changeCart({
      pizzas: [],
      totalPrice: 0,
      totalCount: 0
    }))
  }, [dispatch])

  return (
    <>
      <Header isNeedCartButton={false}/>
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
    </>
  )
}

function EmptyCart(){
  return (
    <StyleEmptyCart>
      <Title>
        Cart Empty
      </Title>
      <svg className="icon" width="300" height="255" viewBox="0 0 300 255" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_45_0)"><path d="M212.984 20.1328C244.015 27.8116 269.535 61.4504 269.139 94.6172C268.751 127.712 242.445 160.335 220.432 191.73C198.481 223.129 180.948 253.32 158.757 254.92C136.538 256.496 109.696 229.448 87.4853 211.507C65.2048 193.57 47.6061 184.731 32.4473 168.966C17.2884 153.2 4.63148 130.5 7.59498 110.175C10.5585 89.8499 29.1502 71.9127 48.5952 62.1263C68.1062 52.2718 88.4046 50.5721 116.864 40.5816C145.324 30.5912 181.922 12.3981 212.984 20.1328Z" fill="#F8F8F8"/><path d="M197.278 173.629L156.709 91.0457C155.471 90.3018 150.502 87.0103 150.502 87.0103" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M153.799 97.5847C153.314 95.933 151.86 92.5295 151.86 92.5295C150.972 92.4735 144.789 89.194 144.789 89.194" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M143.02 89.498L162.244 81.4112" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.94175 215.646L0 220.353L11.8618 236.391L15.5312 233.043L9.8835 218.774L4.94175 215.646Z" fill="black"/><path d="M100.724 201.008L96.6396 208.767L106.779 225.045L111.05 223.909L108.249 202.664L100.724 201.008Z" fill="black"/><path d="M146.949 91.0457C150.283 91.0457 152.985 88.9669 152.985 86.4025C152.985 83.838 150.283 81.7592 146.949 81.7592C143.616 81.7592 140.914 83.838 140.914 86.4025C140.914 88.9669 143.616 91.0457 146.949 91.0457Z" fill="#D37C59"/><path d="M66.4033 91.3057C63.6881 95.3051 4.01855 216.118 4.01855 216.118L10.7679 220.365L89.5101 132.507L66.4033 91.3057Z" fill="#56CAD8"/><path d="M117.811 61.9903C119.362 63.3581 123.908 68.6772 125.394 69.6451C126.88 70.6129 143.92 81.5712 147.116 82.5391C150.312 83.5069 143.52 86.3865 143.52 86.3865C143.52 86.3865 121.321 81.3113 119.68 80.1834C118.04 79.0556 108.315 70.9849 108.315 68.8212C108.315 66.6576 117.811 61.9903 117.811 61.9903Z" fill="#D37C59"/><path d="M104.805 51.5919C109.758 46.0528 119.432 59.1907 119.223 61.1224C119.013 63.0541 112.171 71.1568 107.834 71.1568C106.535 71.1568 101.325 55.4833 104.805 51.5919Z" fill="#FCC486"/><path d="M65.6352 92.5215C64.4716 94.1212 59.429 106.919 59.429 111.319C59.429 141.314 102.803 149.097 109.033 149.097C108.133 153.284 98.5906 200.844 99.0406 201.888C99.4905 202.932 107.407 205.064 109.033 204.788C115.239 201.304 135.274 152.796 133.769 145.897C131.655 136.231 98.4704 107.959 93.676 105.144C88.8816 102.328 65.6352 92.5215 65.6352 92.5215Z" fill="#74D5DE"/><path d="M94.2888 39.1939C127.675 39.1939 101.81 103.896 95.9374 107.403C92.0585 109.715 68.0091 100.924 65.4335 92.1055C64.553 89.094 75.8407 39.1939 94.2888 39.1939Z" fill="#FED385"/><path d="M141.868 93.2334C145.201 93.2334 147.903 91.1545 147.903 88.5901C147.903 86.0257 145.201 83.9468 141.868 83.9468C138.535 83.9468 135.832 86.0257 135.832 88.5901C135.832 91.1545 138.535 93.2334 141.868 93.2334Z" fill="#DE8E68"/><path d="M83.6335 69.0692C83.715 72.3326 84.7739 87.3103 86.0889 87.7622C101.992 93.2334 129.533 90.8218 134.288 90.4938C139.044 90.1659 142.093 86.7144 141.856 85.8945C141.62 85.0747 126.662 78.7876 100.697 78.0477C100.216 75.0242 101.368 65.8856 100.181 65.0698C98.9941 64.2539 83.6335 69.0692 83.6335 69.0692Z" fill="#DE8E68"/><path d="M88.0516 41.9654C101.864 39.0539 104.343 65.6417 103.017 67.6014C101.69 69.5611 84.0913 72.3327 81.7949 70.6209C79.4986 68.9092 77.5786 44.1691 88.0516 41.9654Z" fill="#FED892"/><path d="M97.4504 22.6604C96.8142 25.1641 92.4737 39.4978 92.7414 40.2577C93.009 41.0176 98.9826 44.369 101.275 44.0011C101.364 42.9093 102.338 37.0622 104.332 33.5467C106.325 30.0313 97.4504 22.6604 97.4504 22.6604Z" fill="#D37C59"/><path d="M115.138 22.7322C115.885 15.1072 112.507 8.51096 107.593 7.99919C102.679 7.48741 98.0898 13.2538 97.3428 20.8789C96.5958 28.5039 99.9738 35.1001 104.888 35.6119C109.802 36.1237 114.391 30.3572 115.138 22.7322Z" fill="#DE8E68"/><path d="M96.4844 22.6604C95.4681 22.0845 93.5403 18.6931 93.5403 15.5416C93.5403 10.6103 98.3075 7.80278 101.523 6.34301C103.955 5.21918 106.023 0 111.562 0C115.98 0 116.275 4.58728 118.307 4.76325C123.575 5.21518 126.531 5.41915 126.531 9.36653C126.531 12.2661 122.923 20.1648 115.565 20.1648C115.565 18.7011 115.088 15.0656 114.3 13.3179C109.878 13.5459 106.279 19.405 100.146 19.381C98.8311 19.357 96.4844 22.6604 96.4844 22.6604Z" fill="#FD8369"/><path d="M98.8002 25.1161C100.304 25.1161 101.523 23.5815 101.523 21.6886C101.523 19.7957 100.304 18.2611 98.8002 18.2611C97.2963 18.2611 96.0771 19.7957 96.0771 21.6886C96.0771 23.5815 97.2963 25.1161 98.8002 25.1161Z" fill="#DE8E68"/><path d="M294.845 204.792H168.113V176.44C175.044 175.808 273.577 166.21 273.577 166.21V104.568L153.799 97.5847L168.113 176.448" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M178.299 220.457C181.546 220.457 184.179 217.743 184.179 214.394C184.179 211.046 181.546 208.331 178.299 208.331C175.051 208.331 172.418 211.046 172.418 214.394C172.418 217.743 175.051 220.457 178.299 220.457Z" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M293.15 220.457C296.397 220.457 299.03 217.743 299.03 214.394C299.03 211.046 296.397 208.331 293.15 208.331C289.902 208.331 287.269 211.046 287.269 214.394C287.269 217.743 289.902 220.457 293.15 220.457Z" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M158.477 123.353H273.577" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M161.658 140.878H273.577" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M133.288 93.5893L143.02 89.498" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M171.398 140.878C170.137 137.202 156.763 97.7487 156.763 97.7487" stroke="#DFDFDF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_45_0"><rect width="300" height="255" fill="white"/></clipPath></defs></svg>
      <LinkButton
        $btnLinkType='primary'
        to={'/'}
      >
        <svg className="icon" width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.25409 9.49689L12.189 2.88491C12.5057 2.61888 12.7041 2.23819 12.7407 1.82619C12.7773 1.41419 12.6492 1.00447 12.3844 0.686754C12.1195 0.369035 11.7396 0.16921 11.3277 0.131038C10.9159 0.0928651 10.5057 0.219456 10.187 0.48309L0.81156 8.29595C0.635764 8.44282 0.494357 8.6265 0.397324 8.83401C0.300291 9.04152 0.249998 9.2678 0.249998 9.49688C0.249998 9.72595 0.300291 9.95223 0.397324 10.1597C0.494357 10.3673 0.635764 10.5509 0.81156 10.6978L10.1869 18.5106C10.5055 18.7755 10.9162 18.9032 11.3288 18.8654C11.7414 18.8277 12.1222 18.6278 12.3875 18.3095C12.6527 17.9913 12.7808 17.5807 12.7436 17.1681C12.7064 16.7555 12.5069 16.3745 12.189 16.1088L4.25409 9.49689Z" />
        </svg>
        Back
      </LinkButton>
    </StyleEmptyCart>
  )
}