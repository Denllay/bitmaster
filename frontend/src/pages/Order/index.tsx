import { RightCrew } from '@entities/crews';
import { CrewsList, OrderButton } from '@features/crews';
import { Map, GeocodeSearch } from '@features/map';
import { Layout, Typography } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useRef } from 'react';
import { MapRef } from 'react-map-gl';
import styles from './styles.module.scss';

const { Content, Header } = Layout;

export const Order = () => {
  const [form] = useForm();
  const mapRef = useRef<MapRef>(null);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Typography.Title italic>Детали заказа</Typography.Title>
      </Header>

      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <GeocodeSearch mapRef={mapRef} form={form} />
          <RightCrew />

          <div className={styles.content_container}>
            <Map mapRef={mapRef} />
            <CrewsList />
          </div>

          <OrderButton form={form} />
        </Content>
      </Layout>
    </Layout>
  );
};
