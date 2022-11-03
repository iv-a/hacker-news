import React, {
  DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './paragraph.module.css';

interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'inactive' | 'accent';
  weight?: 'regular' | 'bold' | 'black';
  type?: 'div' | 'p';
  children?: ReactNode;
}

export const Paragraph:FC<IParagraphProps> = ({
  type = 'p',
  size = 'm',
  color = 'primary',
  weight = 'regular',
  children,
  className,
  ...props
}) => {
  const paragraphClassName = cn(styles.paragraph, className, {
    [styles.primary]: color === 'primary',
    [styles.inactive]: color === 'inactive',
    [styles.accent]: color === 'accent',
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l',
    [styles.regular]: weight === 'regular',
    [styles.bold]: weight === 'bold',
    [styles.black]: weight === 'black',
  });

  return type === 'p' ? (
    <div
      className={paragraphClassName}
      {...props}
    >
      {children}
    </div>
  ) : (
    <p
      className={paragraphClassName}
      {...props}
    >
      {children}
    </p>
  );
};
