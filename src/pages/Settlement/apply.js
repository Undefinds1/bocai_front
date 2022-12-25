import { Button, Card, Form, message, Select, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
function Apply(props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div className="uploadButton">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>点击上传游戏截图</div>
    </div>
  );

  return (
    <Card
      title={
        <div className="applyTitle">
          <h3>我的VIP等级:{'普通VIP-2'}</h3>
          <Button>可赔付金额：3150</Button>
          <Button>升级VIP</Button>
        </div>
      }
    >
      <div className="applyForm">
        <p>申请理赔</p>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout={'horizontal'}
          form={form}
          initialValues={{ layout: 'horizontal' }}
        >
          <Form.Item label="绑定娱乐城账号">
            <Select
              style={{ width: '60%' }}
              options={[
                {
                  value: '威尼斯娱乐城',
                  label: '威尼斯娱乐城',
                },
                {
                  value: '永利娱乐城',
                  label: '永利娱乐城',
                },
              ]}
              placeholder="请选择绑定娱乐城"
            />
          </Form.Item>
          <Form.Item label="娱乐城账号">
            <Select
              style={{ width: '60%' }}
              options={[
                {
                  value: 'ceshi01',
                  label: 'ceshi01',
                },
                {
                  value: 'cehsi02',
                  label: 'cehsi02',
                },
              ]}
              placeholder="请选择绑定的娱乐城账号"
            />
          </Form.Item>
          <Form.Item label="理赔金额">
            <Select
              style={{ width: '60%' }}
              options={[
                {
                  value: '630',
                  label: '630',
                },
                {
                  value: '1250',
                  label: '1250',
                },
                {
                  value: '3150',
                  label: '3150',
                },
                {
                  value: '12500',
                  label: '12500',
                },
                {
                  value: '63000',
                  label: '63000',
                },
              ]}
              placeholder="请选择绑定的娱乐城账号"
            />
          </Form.Item>
          <Form.Item>
            <span className="tip">
              上传截图：（上传的截图必须包含【桌台开奖记录】和【游戏局号】）
            </span>
            <div className="upload">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
          </Form.Item>
          <Form.Item className="submit">
            <Button size="large" type="primary">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
}

export default Apply;
