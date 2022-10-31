import React, {DetailedHTMLProps, FC, HTMLAttributes, useMemo} from "react";
import styles from './score.module.css';
import cn from "classnames";

interface IScoreProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  score: number;
}

export const Score: FC<IScoreProps> = ({ score, className, ...props }) => {
  const formattedScore = useMemo(() => {
    return score >= 0 ? '+' + score : '' + score;
  }, [score]);

  return (
    <p
      className={cn(styles.score, className, {
        [styles.positive]: score >= 0,
        [styles.negative]: score < 0,
      })}
      {...props}
    >
      {formattedScore}
    </p>
  );
}