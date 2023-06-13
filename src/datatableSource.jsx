export const userColumns = (columnWidth) =>  [
    { field: "id", headerName: "ID", width: columnWidth.id || 70 },
    {
      field: "user",
      headerName: "User",
      width: columnWidth.user || 230,
      renderCell: (params) => {
        return (
          <div className="cell-with-img">
            <img className="cell-img" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    }, {
        field: "email",
        headerName: "Email",
        width: columnWidth.email || 230,
    }, {
        field: "address",
        headerName: "Address",
        width: columnWidth.address || 260,
    }, {
        field: "country",
        headerName: "Country",
        width: columnWidth.country || 160,
    }
];


export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 280,
    renderCell: (params) => {
      return (
        <div className="cell-with-img">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.productname}
        </div>
      );
    },
  }, {
      field: "brand",
      headerName: "Brand",
      width: 230,
  }, {
      field: "price",
      headerName: "Price(₹)",
      width: 260,
  }, {
      field: "category",
      headerName: "Category",
      width: 160,
  }
];

