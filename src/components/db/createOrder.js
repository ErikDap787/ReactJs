const createOrder = (order) => {
  const db = getFirestore();
  db.collection("orders")
    .add(order)
    .then((docRef) => {
      console.log("Order created with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error creating order: ", error);
    });
};
