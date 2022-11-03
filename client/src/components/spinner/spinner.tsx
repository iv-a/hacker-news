import React, { FC } from 'react';
import cn from 'classnames';
import styles from './spinner.module.css';

export const Spinner: FC = () => <div className={cn(styles.spinner)} />;
