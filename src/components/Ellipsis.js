import React from 'react';
import { Tooltip } from 'antd';

function Ellipsis(props) {
  let { value } = props;
  let isEllipsis = false;
  let showTitle = '';
  if (value && value?.length > 10) {
    showTitle = value.slice(0, 10) + '...';
    isEllipsis = true;
  }

  if (isEllipsis) {
    return (
      <Tooltip title={value} color={'#f50'}>
        {showTitle}
      </Tooltip>
    );
  }
  return value;
}

export default Ellipsis;
