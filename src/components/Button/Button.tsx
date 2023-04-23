import styled from "styled-components";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
