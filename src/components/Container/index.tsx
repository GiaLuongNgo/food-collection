import { IContainer } from "../../types";
import "./style.scss";

export default function Container({ children, className }: IContainer) {
  return <div className={`container ${className}`}>{children}</div>;
}