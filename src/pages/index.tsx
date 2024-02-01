/*global kakao */
import KakaoMap from "@/components/map/KakaoMap";
import Markers from "@/components/markers/Markers";
import StoreBox from "@/components/storeBox/StoreBox";
import * as stores from "@/data/store_data.json";
import { StoreType } from "@/interface";
import { useState } from "react";
export default function Home({ stores }: { stores: StoreType[] }) {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  return (
    <>
      <KakaoMap setMap={setMap} />
      <Markers map={map} stores={stores} setCurrentStore={setCurrentStore} />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  );
}

export async function getStaticProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
