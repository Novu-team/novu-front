import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useTable } from 'react-table'
import { map, get, isEqual, includes, last, split } from 'lodash'

import Loading from '../../atoms/Loading'
import Pagination from '../../molecules/Pagination'

const LEFT_COL = ['name', 'actions']

const Container = styled.div`
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(51, 102, 204, 0.15);
  background-color: ${({ theme }) => get(theme, 'white')};
`

const StyledLoading = styled(Loading)`
  width: 20%;
  height: 20%;
  padding-top: 10%;
  padding-bottom: 10%;
`

const StyledTable = styled.table`
  width: 100%;
`

const TableHeader = styled.th`
  text-align: ${({ left }) => left ? 'left' : 'center'};
  font-size: 15px;
  font-weight: 600;
  padding: 0 8px;
  padding-bottom: 16px;
`

const TableRow = styled.tr`
  background-color: ${({ theme, idx }) => get(theme, isEqual(idx % 2, 0) ? 'paleGrey' : 'white')};
`

const TableCell = styled.td`
  height: 45px;
  padding: 0 8px;
  vertical-align: middle;
  font-size: 15px;
  text-align: ${({ left }) => left ? 'left' : 'center'};
`

const DataTable = ({ columns, data, updatePage, page, maxPage, loading }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })

  if (loading) {
    return (
      <Container>
        <StyledLoading />
      </Container>
    )
  }

  return (
    <Container>
      <StyledTable {...getTableProps()}>
        <thead>
        {map(headerGroups, headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {map(headerGroup.headers, column => (
              <TableHeader left={includes(LEFT_COL, get(column, 'id'))} {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableHeader>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {map(rows, (row, idx) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()} idx={idx}>
              {map(row.cells, cell => (
                <TableCell left={includes(LEFT_COL, last(split(get(cell.getCellProps(), 'key'), '_')))} {...cell.getCellProps()} >
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          )
        })}
        </tbody>
      </StyledTable>
      <Pagination updatePage={updatePage} page={page} maxPage={maxPage}/>
    </Container>
  )
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  columns: PropTypes.array.isRequired,
  maxPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
}

export default DataTable