import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { db } from "./../firebase";
import Order from './Order'
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <div className="orsers__order">
          {orders?.map(order =>(
              <Order order={order} />
          ))}
      </div>
    </div>
  );
}

export default Orders;
