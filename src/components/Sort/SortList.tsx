import { SortListType } from "./types";

function SortList({...args}: SortListType) {
    const {sorts, handleOnClickSort, sortType} = args;

    return (
      <div className="sort-list">
        {
          sorts.map((name: string, index: number) => (
            <button onClick={() => handleOnClickSort(name)}
                    className={sortType === name ? "sort-list-item active" : "sort-list-item"}
                    type={'button'}
                    key={index}
            >
              {name}
            </button>
          ))
        }
      </div>
    )
  }

  export default SortList;