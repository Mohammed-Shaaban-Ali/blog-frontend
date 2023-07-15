import { current } from "@reduxjs/toolkit";
import "./Pagination.css";
const Pagination = ({ setCurrentPage, currentPage, pages }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((e) => e - 1)}
        className={currentPage === 1 ? "page previous nul" : "page previous"}
      >
        Previous
      </button>
      {generatedPages.map((p) => (
        <div
          onClick={() => setCurrentPage(p)}
          className={currentPage === p ? "page activ" : "page"}
          key={p}
        >
          {p}
        </div>
      ))}

      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage((e) => e + 1)}
        className={currentPage === pages ? "page next nul " : "page next"}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
