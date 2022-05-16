import React, { useEffect, useState } from 'react';
import {
  Form, Input, Button, Select, InputNumber, Typography,
} from 'antd';
import { useAlert } from 'react-alert';
import {
  useHistory,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNft, updateNft } from '../redux/action/nft';

export default function NewNft(props) {
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const [form] = Form.useForm();
  const { Title } = Typography;
  const { setFieldsValue } = form;
  const { Option } = Select;
  const history = useHistory();
  const dispatch = useDispatch();
  const { edit, data, close } = props;
  useEffect(() => {
    form.resetFields();
    if (edit) {
      setFieldsValue({
        _id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
        chain: data.chain,
        img: data.img,
      });
    }
  }, []);
  const onFinish = (values) => {
    setLoading(true);
    if (edit) {
      if (values) {
        // eslint-disable-next-line
    dispatch(updateNft(values,data._id))
          .then(() => {
            setLoading(false);
            alert.show('NFT updated sucessfully', {
              type: 'success',
              timeout: 5000,
            });
            close();
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    } else if (values) {
      dispatch(addNft(values))
        .then(() => {
          setLoading(false);
          alert.show('NFT created sucessfully', {
            type: 'success',
            timeout: 5000,
          });
          form.resetFields();
          history.push('/');
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
      lg: {
        offset: 0,
      },
    },
  };
  return (
    <div>
      <Title className="mt-5 text-center mb-5">{edit ? '' : 'Add New NFT'}</Title>
      {/* eslint-disable-next-line */}
    <Form {...formItemLayout}
      name="newNft"
      form={form}
      onFinish={onFinish}
      className="d-flex flex-column align-items-center"
    >
      <Form.Item
        label="Title"
        name="title"
        style={{
          width: '100%',
        }}
        rules={[
          {
            required: true,
            message: 'Please input the nft title!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        style={{
          width: '100%',
        }}
        rules={[
          {
            required: true,
            message: 'Please input the nft description!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Image Url"
        name="img"
        style={{
          width: '100%',
        }}
        rules={[
          {
            required: true,
            message: 'Please input the image url!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        style={{
          width: '100%',
        }}
        rules={[
          {
            required: true,
            message: 'Please input the nft price!',
          },
        ]}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
          min={0}
        />
      </Form.Item>
      <Form.Item
        label="Chain"
        name="chain"
        style={{
          width: '100%',
        }}
        rules={[
          {
            required: true,
            message: 'Please input the nft protocol chain!',
          },
        ]}
      >
        <Select
          allowClear
          showSearch
          filterOption={
            (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option
            key="eth"
            value="ETH"
          >
            ETH
          </Option>
          <Option
            key="bsc"
            value="BSC"
          >
            BSC
          </Option>
          <Option
            key="neo"
            value="NEO"
          >
            NEO
          </Option>
          <Option
            key="matic"
            value="MATIC"
          >
            MATIC
          </Option>
          <Option
            key="luna"
            value="LUNA"
          >
            LUNA
          </Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" disabled={loading} type="primary">
          {loading && (
          <span className="spinner-border spinner-border-sm" />
          )}
          <span>Save</span>
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}
