import { useState } from "react"
import "./orders.scss"
import DataTable from "../../components/dataTable/DataTable"
import Add from "../../components/add/Add"
import { GridColDef } from "@mui/x-data-grid";
import { orders } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "#", width: 90 },
  { field: "num", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Product Name",
    width: 250,
  },
  {
    field: "client",
    type: "string",
    headerName: "Client",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    type: "string",
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "string",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="orders">
      <div className="info">
        <h1>Orders</h1>
        <button onClick={() => setOpen(true)}>Add New Order</button>
      </div>
      <DataTable slug="orders" columns={columns} rows={orders} />
      {open && <Add slug="order" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders
