import { Card } from 'antd';
import React from 'react';

function Record(props) {
  let data = [
    {
      time: '2022/12/22',
      city: '威尼斯人娱乐城',
      account: 'ceshi01',
      amount: 1222,
      img: '',
      status: '审核中',
    },
    {
      time: '2022/12/22',
      city: '永利娱乐城',
      account: 'ceshi02',
      amount: 13333,
      img: '',
      status: '成功',
    },
  ];
  return (
    <Card title="理赔记录">
      <table
        border="1"
        cellpadding="0"
        cellspacing="0"
        className="recordTablle"
      >
        <tr>
          <th>时间</th>
          <th>娱乐城</th>
          <th>娱乐城账号</th>
          <th>金额</th>
          <th>截图</th>
          <th>状态</th>
        </tr>
        {data.map((x) => (
          <tr>
            <td>{x.time}</td>
            <td>{x.city}</td>
            <td>{x.account}</td>
            <td>{x.amount}</td>
            <td>{x.img}</td>
            <td>{x.status}</td>
          </tr>
        ))}
      </table>
    </Card>
  );
}

export default Record;
