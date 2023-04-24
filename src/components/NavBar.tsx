import React from "react";

interface Props {
  cartCount: number;
}

const NavBar = ({ cartCount }: Props) => {
  return <div>{cartCount}</div>;
};

export default NavBar;
