import "./Pagination.css";
const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page previous">Previous</div>
      {[1, 2, 3, 4, 5].map((p) => (
        <div className="page" key={p}>
          {p}
        </div>
      ))}
      <div className="page next">Next</div>
    </div>
  );
};

export default Pagination;
