import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandaleText = ({ children, maxChars }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  let shortText =
    children && children.length >= maxChars
      ? children.substring(0, maxChars) + "..."
      : children;

  return (
    <div>
      {expanded === true ? children : shortText}
      <br />
      <button onClick={handleClick}>{expanded ? "Collapse" : "Expand"}</button>
    </div>
  );
};

export default ExpandaleText;
