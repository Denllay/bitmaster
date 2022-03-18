import { useTypedSelector } from '@shared/model';
import { Typography } from 'antd';
import { FC } from 'react';
import { crewsModel } from '..';
import styles from './styles.module.scss';

export const RightCrew = () => {
  const { rightCrew } = useTypedSelector(crewsModel.crewsSelector);

  if (!rightCrew) {
    return null;
  }

  const { carColor, driverName, carNumber } = rightCrew;

  return (
    <div className={styles.main}>
      <Typography.Text>Подходящий экипаж: </Typography.Text>

      <div className={styles.crew}>
        <Typography.Text>{driverName} </Typography.Text>
        <Typography.Paragraph>{carColor}</Typography.Paragraph>

        <div className={styles.crew_number}>{carNumber}</div>
      </div>
    </div>
  );
};
