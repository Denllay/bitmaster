import { crewsModel } from '@entities/crews';
import { useTypedSelector } from '@shared/model';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

export const CrewsList = () => {
  const dispatch = useDispatch();
  const { crewsList } = useTypedSelector(crewsModel.crewsSelector);

  const crewsListEl = crewsList?.map(({ driverName, crewId, carColor, distance }) => {
    const onCrewClick = () => {
      dispatch(crewsModel.UpdateRightCrew(crewId));
    };

    return (
      <div key={crewId} onClick={onCrewClick} className={styles.crew}>
        <Typography.Text className={styles.crew_title}>{driverName}</Typography.Text>

        <div className={styles.crew_container}>
          <Typography.Paragraph>{carColor}</Typography.Paragraph>
          <Typography.Text>{distance}м.</Typography.Text>
        </div>
      </div>
    );
  });

  return <div className={styles.main}>{crewsListEl}</div>;
};
