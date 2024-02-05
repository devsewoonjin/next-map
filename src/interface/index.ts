export interface StoreType {
  id: number;
  phone?: string | null; //전화번호
  address?: string | null; //도로명 주소
  lat?: string | null; // 위도 : y 좌표
  lng?: string | null; // 경도 : x 좌표
  name?: string | null; //업소 이름
  category?: string | null; //비즈니스 코드 번호
  storeType?: string | null;
  foodCertifyName?: string | null;
}
