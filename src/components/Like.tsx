import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  let [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart size={30} color="red" onClick={toggle} />;
  else return <AiOutlineHeart size={30} color="red" onClick={toggle} />;
};

export default Like;
