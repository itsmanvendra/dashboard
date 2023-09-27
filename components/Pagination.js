import React, {useState, useEffect} from "react";
import {
  BsArrowRightSquare,
  BsArrowLeftSquare,
} from "react-icons/bs";

const Pagination = ({ currentPage , handlePreviousPage, handleNextPage, handlePageChange, totalPages}) => {
    const [page, setPage] = useState(currentPage);
    const [pageArray, setPageArray] = useState([1, 2, 3, 4, `...`, 40]);
    useEffect(() => {
        if (page <= 2) {
            setPageArray([1, 2, 3, 4, `...`, 40]);
        }
        else if (page > 2 && page < totalPages - 2) {
            setPageArray([
              1,
              `...`,
              page - 1,
              page,
              Number(page) + 1,
              `...`,
              Number(totalPages),
            ]);
        }
        else if(page === totalPages - 2) {
            setPageArray([
              1,
              `...`,
              page - 1,
              page,
              Number(page) + 1,
              Number(totalPages),
            ]);
        }
        else {
            setPageArray([1, `...`, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
        }
        
    }, [page])
    const handleGoToPage = (e) => {
        if (e.target.innerHTML === `...`) {
            return;
        }
        else {
            handlePageChange(e.target.innerHTML);
            setPage(e.target.innerHTML - 1);
        }
    }
    return (
      <>
        <div className="flex ">
          <div className="grow text-base text-slate-400 px-2 font-openSans">
            Showing data {page * 6 + 1} to {page * 6 + 6} of {totalPages * 6}{" "}
            entries
          </div>
          <div className="flex gap-1">
            <button
              className="rounded-lg mx-1  bg-slate-100 "
              onClick={() => {
                handlePreviousPage();
                setPage(page - 1);
              }}
              disabled={page < 1}
            >
              <BsArrowLeftSquare size={24} />
            </button>
            {pageArray.map((pageEle, index) => {
              if (pageEle === `...`) {
                return <div key={index} className="text-base">...</div>;
              }
              return (
                <button
                  key={index}
                  className={`px-2 py-1 rounded text-sm active:bg-blue-500 active:text-white ${
                    page + 1 == pageEle
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-black"
                  }  `}
                  onClick={handleGoToPage}
                >
                  {pageEle}
                </button>
              );
            })}
            <button
              className="rounded-lg mx-1 bg-slate-100"
              onClick={() => {
                handleNextPage();
                setPage(page + 1);
              }}
              disabled={page + 1 > Number(totalPages)}
            >
              <BsArrowRightSquare size={24} />
            </button>
          </div>
        </div>
      </>
    );
};

export default Pagination;
