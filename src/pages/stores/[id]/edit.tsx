import { useRouter } from "next/router";
import React from "react";

const EditStoreDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>EditStoreDetailPage : {id}</div>;
};

export default EditStoreDetailPage;
