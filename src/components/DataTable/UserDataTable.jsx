import React, {useEffect, useState} from 'react'
import "./datatable.scss"
import { userColumns } from '../../datatableSource';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';



const UserDatatable = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1)
  const [columnWidths, setColumnWidths] = useState({});


  const handleColumnWidthChange = (columnId, newWidth) => {
    setColumnWidths(prevWidths => ({
      ...prevWidths,
      [columnId]: newWidth,
    }));
  };

  useEffect(()=>{
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);

      },
      (error) => {
        console.log(error);
      }
    )

    return () => {
      unsub();
    };
  },[])
  console.log(data);

  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
   
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="view-btn">View</div>
            </Link>
            <div
              className="del-btn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatable-title">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={data}
        columns={userColumns(columnWidths).concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[8]}
        onColumnWidthChange={handleColumnWidthChange}
        resizeable
      />
    </div>
  );
};

export default UserDatatable;