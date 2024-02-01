/*global kakao */
import { Inter } from "next/font/google";
import Script from "next/script";
import { Dispatch, SetStateAction } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
const inter = Inter({ subsets: ["latin"] });
//강남역
const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;
interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}
const KakaoMap = ({ setMap }: MapProps) => {
  const loadKakao = () => {
    //kakao map 로드
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      setMap(map);
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onLoad={loadKakao}
      />
      <div id="map" className="w-full h-[calc(100dvh-52px)] "></div>
    </>
  );
};
export default KakaoMap;
