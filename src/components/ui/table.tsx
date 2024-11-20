import React from "react";

interface TableProps {
  data: any[];
  columns: {
    header: string;
    accessor: string;
  }[];
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

  // const handlePageChange = (page: number) => {
  //   if (page >= 1 && page <= totalPage) {
  //     setCurrentPage(page);
  //   }
  // };

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
