import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="navbar">
      <Link href="/" className="navbar__logo">
        nextMap
      </Link>
      <div className="navbar__list">
        <Link href="/stores" className="navbar__list--item">
          맛집 목록
        </Link>
        <Link href="/stores/new" className="navbar__list--item">
          맛집 등록
        </Link>
        <Link href="/users/likes" className="navbar__list--item">
          찜한 가게
        </Link>
        <Link href="/users/login" className="navbar__list--item">
          로그인
        </Link>
      </div>
      {/* 모바일 버튼 */}
      <div
        role="presentation"
        className="navbar__button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <AiOutlineClose /> : <BiMenu />}
      </div>
      {/* 모바일 navbar */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link href="/stores" className="navbar__list--item--mobile">
              맛집 목록
            </Link>
            <Link href="/stores/new" className="navbar__list--item--mobile">
              맛집 등록
            </Link>
            <Link href="/users/likes" className="navbar__list--item--mobile">
              찜한 가게
            </Link>
            <Link href="/users/login" className="navbar__list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
