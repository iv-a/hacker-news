import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from "react";
import styles from './paragraph.module.css';
import cn from "classnames";

interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'inactive';
  weight?: 'regular' | 'bold' | 'black';
  children: ReactNode;
}

export const Paragraph:FC<IParagraphProps> = ({
     size = 'm',
     color= 'primary',
     weight = 'regular',
     children,
     className,
     ...props
}) => {
  return (
    <div
      className={cn(styles.paragraph, className, {
        [styles.primary]: color === 'primary',
        [styles.inactive]: color === 'inactive',
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        [styles.regular]: weight === 'regular',
        [styles.bold]: weight === 'bold',
        [styles.black]: weight === 'black',
      })}
      {...props}
    >
      {children}
    </div>
  );
}