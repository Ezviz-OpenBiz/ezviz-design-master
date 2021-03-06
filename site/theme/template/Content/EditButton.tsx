import React from 'react';
import { Tooltip } from '@ezviz/ezd';
import { EditOutlined } from '@ant-design/icons';

const branchUrl = 'https://github.com/Ezviz-OpenBiz/ezviz-design-master/edit/master/';

export interface EditButtonProps {
  title: React.ReactNode;
  filename?: string;
}

export default function EditButton({ title, filename }: EditButtonProps) {
  return (
    <Tooltip title={title}>
      <a
        className="edit-button"
        href={`${branchUrl}${filename}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <EditOutlined />
      </a>
    </Tooltip>
  );
}
