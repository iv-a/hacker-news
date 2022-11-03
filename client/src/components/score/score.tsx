import React, {
  DetailedHTMLProps, FC, HTMLAttributes, useMemo,
} from 'react';
import cn from 'classnames';
import styles from './score.module.css';

interface IScoreProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  score: number;
  size?: 's' | 'l'
}

export const Score: FC<IScoreProps> = ({
  score, size = 'l', className, ...props
}) => {
  const formattedScore = useMemo(() => (score >= 0 ? `+${score}` : `${score}`), [score]);

  return (
    <p
      className={cn(styles.score, className, {
        [styles.positive]: score >= 0,
        [styles.negative]: score < 0,
        [styles.l]: size === 'l',
        [styles.s]: size === 's',
      })}
      {...props}
    >
      {formattedScore}
    </p>
  );
};
