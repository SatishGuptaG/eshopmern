import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import {  useSelector } from "react-redux";
import { backend_url } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from 'react-icons/md';
//import { RxCross1 } from 'react-icons/rx';
//import { Country, State } from 'country-state-city';
//import { toast } from 'react-toastify';


const ProfileContent = ({ active }) => {
const { user } = useSelector((state) => state.user);
const [name, setName] = useState(user && user.name);
const [email, setEmail] = useState(user && user.email);
const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
const [zipCode, setZipCode] = useState(user && user.zipCode);
const [address1, setAddress1] = useState(user && user.address1);
const [address2, setAddress2] = useState(user && user.address2);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/* Profile Page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad123]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex item-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} arial-required={true}>
              <div className="w-full pb-3 800px:flex block">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-3">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-3">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full pb-3 800px:flex block">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-3">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-3">Zip Code</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full pb-3 800px:flex block">
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-3">Address 1</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-[100%] 800px:w-[50%]">
                  <label className="block pb-3">Address 2</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}


      {/* order */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}
      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}
      {/* PaymentMethod order */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}
      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};
const AllOrders = () => {
  const orders = [
    {
      _id: "734253245230dg",
      oderItems: [
        {
          name: "Iphone 12 pro max",
        },
      ],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.oderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const orders = [
    {
      _id: "734253245235dg",
      oderItems: [
        {
          name: "Iphone 12 pro max",
        },
      ],
      totalPrice: 124,
      orderStatus: "Processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.oderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  const orders =[
    {
      _id:"734253245235dg",
      oderItems:[
        {
          name:"Iphone 12 pro max",
        },
      ],
      totalPrice:125,
      orderStatus:"Processing",
    }
  ]
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.oderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const PaymentMethod =()=>{
  return(
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
      <h1 className="text-[25px] front-[600] text-[#000000ba] pb-2">
        Payment Methods
      </h1>
      <div className={`${styles.button}rounded-md`}>
        <span className="text-[#fff]">Add New</span>
      </div>
    </div>
    <br />
    <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
      <div className="flex items-center">
        <img src="https://www.freepnglogos.com/uploads/visa-logo-icon-30.png" 
        className="w-[40px] h-[10px]"
        alt="" />
        <h5 className="pl-5 font-[600]"> Satish Gupta</h5>
      </div>
      <div className="pl-8 flex items-center">
        <h6>3453 **** 9806</h6>
        <h5 className="pl-6">16/2023</h5>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
        <AiOutlineDelete size={25} className="cursor-pointer"/>
      </div>
    </div>
    </div>
  )
}

const Address = () => {
  return(
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
      <h1 className="text-[25px] front-[600] text-[#000000ba] pb-2">
      Address
      </h1>
      <div className={`${styles.button}rounded-md`}>
        <span className="text-[#fff]">Add New</span>
      </div>
    </div>
    <br />
    <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
      <div className="flex items-center">
        <h5 className="pl-5 font-[600]">Default</h5>
      </div>
      <div className="pl-8 flex items-center">
        <h6>sector -234 noida up.</h6>
      </div>
      <div className="pl-8 flex items-center">
        <h6>34523445645</h6>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
        <AiOutlineDelete size={25} className="cursor-pointer"/>
      </div>
    </div>
    </div>
  )
};

export default ProfileContent;
