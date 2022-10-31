import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from "react";
import styles from './username.module.css';
import cn from "classnames";

interface IUsernameProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode;
}

export const Username:FC<IUsernameProps> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(styles.username, className)}
      {...props}
    >
      {children}
    </p>
  );
}