import React, {
  DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState,
} from 'react';
import cn from 'classnames';
import moment from 'moment';
import styles from './timestamp.module.css';

interface ITimestampProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  time: number,
  weight?: 'bold' | 'regular'
}

export const Timestamp: FC<ITimestampProps> = ({
  time, weight = 'regular', className, ...props
}) => {
  const [formattedTime, setFormattedTime] = useState<string>(() => moment(time * 1000).fromNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(moment(time * 1000).fromNow());
    }, 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p
      className={cn(styles.timestamp, className, {
        [styles.bold]: weight === 'bold',
        [styles.regular]: weight === 'regular',
      })}
      {...props}
    >
      {formattedTime}
    </p>
  );
};
