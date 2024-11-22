import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination_cont">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        <div className="flex gap-2">
          <ChevronLeftIcon className="w-4" />
          <span>Previous</span>
        </div>
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}>
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <div className="flex items-center gap-2">
          <span>Next</span>
          <ChevronRightIcon className="w-4" />
        </div>
      </button>
    </div>
  );
};

export default PaginationComponent;
