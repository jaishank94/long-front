import React, { useState } from "react";
import { useTable, useFilters, useSortBy, useResizeColumns, useBlockLayout, useFlexLayout } from "react-table";
import { useEffect } from "react";
import SupplementDrawer from "./SupplementDrawer";


export default function Table({ columns, data, value, active, active1, testorganismactive, sourceactive }) {

  // Use the state and functions returned from useTable to build your UI
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 200,
      maxWidth: 400,
    }),
    []
  )
  const headerProps = (props) =>
    props && getStyles(props, props.style.align, props.style.justify);

  const getStyles = (props, align = 'center', justify = 'flex-start') => [
    props,
    {
      style: {
        justifyContent: justify,
        alignItems: align,
        display: 'flex'
      }
    }
  ];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter, resetResizing } = useTable({ columns, data, defaultColumn }, useFilters, useSortBy, useBlockLayout, useResizeColumns, useFlexLayout);
  const [supplementDrawer, setSupplementDrawer] = useState(false)
  const [rowData, setRowData] = useState({})
  useEffect(() => {
    setFilter("alsogoodfor", value);
  }, [value]);

  useEffect(() => {
    // setFilter("administration", active);
    setFilter("level", active1)
  }, [active1]);

  useEffect(() => {
    setFilter("administration", active);
  }, [active]);

  useEffect(() => {
    setFilter("testorganism", testorganismactive);
  }, [testorganismactive]);

  useEffect(() => {
    setFilter("compoundsource", sourceactive);
    // console.log("compound***",sourceactive)
  }, [sourceactive]);

  const triggerDrawerHandler = (data) => {
    const { values } = data;
    setRowData(values);
    // console.log(data, "shbcdwc")
    setSupplementDrawer(!supplementDrawer);

  }

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      {/* <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead> */}
      <thead className=" sticky top-0">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(headerProps, {
                  ...column.getSortByToggleProps(),
                  className: column.collapse ? 'collapse' : '',
                })}
                // {...column.getHeaderProps(headerProps)}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? "sort-desc"
                      : "sort-asc"
                    : ""
                }
              >
                {column.render("Header")}
                <div
                  {...column.getResizerProps({ onClick(ev) { ev.stopPropagation() } })}
                  className={`resizer ${column.isResizing ? 'isResizing' : ''
                    }`}
                />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={() => triggerDrawerHandler(row)}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      {
        supplementDrawer &&
        <SupplementDrawer
          open={supplementDrawer}
          rowData={rowData}
          trigger={setSupplementDrawer} />
      }
    </table>
  );

}