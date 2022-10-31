import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from "react";
import styles from './title.module.css';
import cn from "classnames";

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(styles.title, className)}
      {...props}
    >
      {children}
    </h2>
  );
}