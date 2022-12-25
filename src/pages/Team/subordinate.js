import { Card, Form, Select, Input, Button, Table, DatePicker } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
function Subordinate(props) {
  // const [searchLoading, setSearchLoading] = useState(false);
  const [serachOption, setSerachOption] = useState({
    page: 1,
    pageSize: 10,
  });
  const [total, setTotal] = useState(0);
  const [subordinateList, setSubordinateList] = useState([]);
  const [form] = Form.useForm();
  // const handleSelect = async (data, force) => {
  //   setIsBtnLoading({
  //     orderId: data.orderId,
  //     force,
  //   });
  //   let request = force === 1 ? handleSupplement : queryOrder;
  //   const { code, msg } = await request({
  //     ...data,
  //     force,
  //   });
  //   if (code === 1) {
  //     message.success(msg);
  //     await handleSearch();
  //   } else {
  //     message.error(msg);
  //   }
  //   setIsBtnLoading({});
  // };

  const columns = [
    {
      title: '用户账号',
      key: 'userId',
      render: (_, { userId }) => userId,
      align: 'center',
      width: 80,
    },
    {
      title: '邀请人',
      key: 'passId',
      render: (_, { passId }) => passId,
      align: 'center',
      width: 100,
    },
    {
      title: '用户等级',
      key: 'rank',
      render: (_, { rank }) => rank,
      align: 'center',
      width: 120,
    },
    {
      title: '注册时间',
      key: 'registrationAt',
      render: (_, { registrationAt }) => registrationAt,
      align: 'center',
      width: 120,
    },
    {
      title: '最后登陆时间',
      key: 'lastLoginAt',
      render: (_, { lastLoginAt }) => lastLoginAt,
      align: 'center',
      width: 120,
    },
    {
      title: '今日贡献分成',
      key: 'todayOffer',
      render: (_, { todayOffer }) => todayOffer,
      align: 'center',
      width: 120,
    },
    {
      title: '总贡献分成',
      key: 'mainOffer',
      render: (_, { mainOffer }) => mainOffer,
      align: 'center',
      width: 120,
    },
  ];

  const handleSerachOrder = (value, field) => {
    setSerachOption({
      ...serachOption,
      [field]: value,
    });
  };

  const onReset = () => {
    form.resetFields();
  };
  const pagination = {
    current: serachOption.page,
    pageSize: serachOption.pageSize,
    total,
    hideOnSinglePage: true,
    onChange: (page, pageSize) => {
      setSerachOption((item) => ({
        ...item,
        page,
        pageSize,
      }));
    },
    onShowSizeChange: (page, pageSize) => {
      setSerachOption((item) => ({
        ...item,
        page,
        pageSize,
      }));
    },
    pageSizeOptions: [10, 20, 50, 100],
  };
  return (
    <Card title="下级成员">
      <div className="subordinate">
        <Form layout="inline" form={form}>
          <Form.Item label="用户账号" name="userid">
            <Input
              placeholder="请输入用户账号"
              onInput={(e) => handleSerachOrder(e.target.value, 'userId')}
            />
          </Form.Item>
          <Form.Item label="用户等级" name="userLevel">
            <Select
              style={{ width: 180 }}
              onChange={(e) => handleSerachOrder(e, 'passType')}
              allowClear
            >
              {[
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
              ]
                .map((n) => n.value)
                .map((i) => (
                  <Option key={i} value={i}>
                    {i}
                  </Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item label="邀请人" name="inviter">
            <Input
              placeholder="请输入邀请人"
              onInput={(e) => handleSerachOrder(e.target.value, 'askId')}
            />
          </Form.Item>
          <Form.Item label="注册时间" name="registrationAt">
            <DatePicker
              onChange={(__, dateString) => {
                handleSerachOrder(dateString, 'registrationAt');
              }}
            />
          </Form.Item>
          <div className="btns">
            <Form.Item label="">
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
            </Form.Item>
            <Form.Item label="">
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Form.Item>
          </div>
        </Form>
        <Table
          columns={columns}
          dataSource={subordinateList}
          ellipsis
          dataIndex="userId"
          key="userId"
          locale="暂无订单数据"
          pagination={pagination}
          bordered
          scroll={{
            y: '100%',
          }}
        />
      </div>
    </Card>
  );
}

export default Subordinate;
