import React, { useEffect, useState } from 'react';
import {
  Card, Row, Button, Typography, Image, Modal,
} from 'antd';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNft, fetchNfts } from '../redux/action/nft';
import NewNft from './NewNft';

export default function Home() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
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

  const onDelete = (id) => {
    setLoading(true);
    dispatch(deleteNft(id)).then(
      setLoading(false),
      setVisible(false),
      alert.show('Nft Successfully Deleted!', {
        type: 'success',
        timeout: 5000,
      }),
    );
  };

  const closeEdit = () => {
    setEditVisible(false);
  };

  return (
    <>
      <Title className="mt-5 text-center mb-5">Explore Collections</Title>

      <Modal
        title="Edit NFT"
        centered
        onCancel={() => {
          setEditVisible(false);
        }}
        footer={false}
        visible={editVisible}
        width={1000}
      >
        <NewNft edit data={modalData} close={closeEdit} />

      </Modal>
      <Modal
        title="NFT Detail"
        centered
        onCancel={() => {
          setVisible(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setVisible(false);
              setEditVisible(true);
            }}
          >
            Edit
          </Button>,
          // eslint-disable-next-line
          <Button key="submit" type="danger" loading={loading} onClick={() => { onDelete(modalData._id); }}>
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
              // eslint-disable-next-line
            key={e._id}
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
