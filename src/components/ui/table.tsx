import React from "react";
import { useScreenWidth } from "../themes/customState";
import PaginationComponent from "./pagination";

interface TableColumn {
  header: string;
  accessor?: string; // For direct data mapping
  render?: (row: any) => React.ReactNode; // For custom rendering
  hideOnSmall?: boolean; // Hide on small screen
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
  rowsPerPage?: number;
}
const TableComponent: React.FC<TableProps> = ({
  data,
  columns,
  rowsPerPage = 20,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const totalPage = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const screenWidth = useScreenWidth();

  const isSmallScreen = screenWidth < 768;

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) =>
              isSmallScreen && column.hideOnSmall ? null : (
                <th key={index}>{column.header}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) =>
                isSmallScreen && column.hideOnSmall ? null : (
                  <td key={colIndex}>
                    {column.render
                      ? column.render(row) // Use custom render if provided
                      : column.accessor
                      ? row[column.accessor] // Otherwise, use direct accessor
                      : null}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <PaginationComponent
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TableComponent;
