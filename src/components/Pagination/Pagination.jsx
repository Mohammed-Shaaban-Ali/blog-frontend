import "./Pagination.css";
const Pagination = ({ setCurrentPage, currentPage, pages }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }
  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <div
          onClick={() => setCurrentPage((e) => e - 1)}
          className="page previous"
        >
          Previous
        </div>
      )}
      {generatedPages.map((p) => (
        <div
          onClick={() => setCurrentPage(p)}
          className={currentPage === p ? "page activ" : "page"}
          key={p}
        >
          {p}
        </div>
      ))}
      {currentPage !== pages && (
        <div onClick={() => setCurrentPage((e) => e + 1)} className="page next">
          Next
        </div>
      )}
    </div>
  );
};

export default Pagination;
