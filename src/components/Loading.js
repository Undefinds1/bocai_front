import { SyncOutlined } from '@ant-design/icons';
export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <SyncOutlined spin style={{ fontSize: 50 }} />
    </div>
  );
}
