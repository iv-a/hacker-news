import React, {
  ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './button.module.css';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'ghost';
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  children, appearance, className, ...props
}) => (
  <button
    className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}
    {...props}
  >
    {children}
  </button>
);
