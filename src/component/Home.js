import React, { useEffect, useState } from 'react';
import {
  Card, Row, PageHeader, Button, Typography, Image, Modal,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNfts } from '../redux/action/nft';

export default function Home() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState('');
  const nfts = useSelector((state) => state.nfts.nfts);
  const { Meta } = Card;
  const { Title } = Typography;

  useEffect(() => {
    dispatch(fetchNfts());
  }, []);

  const priceStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '20px',
    color: 'black',
    fontWeight: '600',
  };

  const editNft = () => {};
  const deleteNft = () => {

  };

  return (
    <>
      <PageHeader
        className="site-page-header border border-bottom"
        title="Ternoa"
        subTitle="NFT MarketPlace"
        extra={[
          <Button key="3" type="text">Explore</Button>,
          <Button key="2" type="text">Stats</Button>,
          <Button key="1" type="text">
            Resources
          </Button>,
        ]}
      />
      <Title className="mt-5 text-center mb-5">Explore Collections</Title>
      <Modal
        title="NFT Detail"
        centered
        onCancel={() => {
          setVisible(false);
        }}
        footer={[
          <Button key="back" onClick={editNft}>
            Edit
          </Button>,
          <Button key="submit" type="danger" loading={loading} onClick={deleteNft}>
            Delete
          </Button>,
        ]}
        visible={visible}
        width={1000}
      >
        <Card
          cover={(
            <div className="d-flex justify-content-center">
              <Image
                width={300}
                src={`${modalData.img}`}
              />
            </div>
    )}
        >
          <Meta
            title={modalData.title}
            className="text-center"
            description={modalData.description}
          />
          <Meta style={priceStyle} description={`${modalData.chain}  ${modalData.price}`} />
        </Card>
      </Modal>
      <Row className="gap-2 mt-4" justify="center">
        {nfts.map((e) => (
          <Card
            hoverable
            key={e.id}
            style={{ width: 250 }}
            cover={(
              <div className="d-flex" style={{ overflow: 'hidden', height: '250px' }}>
                <Image
                  src={e.img}
                />
              </div>
              )}
          >
            <Meta
              title={e.title}
              description={e.description}
              onClick={() => {
                setModalData(e);
                setVisible(true);
              }}
            />
            <Meta style={priceStyle} description={`${e.chain}  ${e.price}`} />
          </Card>
        ))}
      </Row>
    </>
  );
}
