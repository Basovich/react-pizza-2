import {StyledPagination} from "./StyledPagination";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPage} from "../../redux/slices/filterSlice";

export function Pagination() {
  const {countPage, currentPage} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <nav aria-label="Page navigation pizzas">
      <StyledPagination
        breakLabel="..."
        previousLabel={<svg className="icon" width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.25409 9.50058L12.189 2.8886C12.5057 2.62257 12.7041 2.24188 12.7407 1.82988C12.7773 1.41788 12.6492 1.00816 12.3844 0.690445C12.1195 0.372726 11.7396 0.172901 11.3277 0.134728C10.9159 0.0965559 10.5057 0.223147 10.187 0.48678L0.811562 8.29964C0.635766 8.44652 0.494358 8.63019 0.397325 8.8377C0.300292 9.04521 0.25 9.27149 0.25 9.50057C0.25 9.72965 0.300292 9.95593 0.397325 10.1634C0.494358 10.3709 0.635766 10.5546 0.811562 10.7015L10.187 18.5143C10.5055 18.7792 10.9162 18.9068 11.3288 18.8691C11.7414 18.8314 12.1222 18.6315 12.3875 18.3132C12.6527 17.995 12.7808 17.5844 12.7436 17.1718C12.7064 16.7591 12.5069 16.3781 12.189 16.1125L4.25409 9.50058Z" /></svg>}
        onPageChange={(event) => dispatch(changeCurrentPage(event.selected))}
        pageRangeDisplayed={2}
        pageCount={countPage}
        forcePage={currentPage}
        nextLabel={<svg className="icon" width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.74591 9.50308L0.811017 16.1151C0.4943 16.3811 0.295908 16.7618 0.259289 17.1738C0.22267 17.5858 0.350808 17.9955 0.615641 18.3132C0.880475 18.6309 1.26042 18.8308 1.67228 18.8689C2.08413 18.9071 2.49433 18.7805 2.81305 18.5169L12.1884 10.704C12.3642 10.5571 12.5056 10.3735 12.6027 10.166C12.6997 9.95845 12.75 9.73217 12.75 9.50309C12.75 9.27402 12.6997 9.04774 12.6027 8.84023C12.5056 8.63272 12.3642 8.44904 12.1884 8.30217L2.81305 0.48933C2.49448 0.224432 2.08378 0.0968211 1.67118 0.134529C1.25858 0.172237 0.877824 0.372179 0.612545 0.690436C0.347267 1.00869 0.219164 1.41923 0.256378 1.83188C0.293592 2.24452 0.49308 2.62552 0.811019 2.89118L8.74591 9.50308Z" /></svg>}
        activeLinkClassName="active"
        renderOnZeroPageCount={null}
      />
    </nav>
  )
}