import React from 'react'
import "./datatable.scss"
import { userColumns, userRows } from '../../datatableSource';
import { DataGrid } from "@mui/x-data-grid";

const actionColumn = [
  { field: "action", headerName: "Action", width: 200, renderCell: () => {
    return (
      <div className="cell-action">
        <div className='view-btn'>View</div>
        <div className='del-btn'>Delete</div>
      </div>
    )
  }}
]

const DataTable = () => {
  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
