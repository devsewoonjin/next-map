import { useRouter } from "next/router";
import React from "react";

const StoreDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>StoreDetailPage : {id}</div>;
};

export default StoreDetailPage;
