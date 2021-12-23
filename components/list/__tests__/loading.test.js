import React from 'react';
import { render } from 'enzyme';
import { LoadingOutlined } from '@ant-design/icons';

import List from '..';

describe('List', () => {
  it('renders empty loading', () => {
    const loading = {
      spinning: true,
    };
    const wrapper = render(
      <List loading={loading} dataSource={[]} renderItem={() => <List.Item />} />,
    );
    expect(wrapper.find('.ezd-list-empty-text')).toHaveLength(0);
  });

  it('renders object loading', () => {
    const loading = {
      spinning: true,
    };
    const wrapper = render(
      <List loading={loading} dataSource={[1]} renderItem={() => <List.Item />} />,
    );
    expect(wrapper.find('.ezd-spin-spinning')).toHaveLength(1);
  });

  it('renders object loading with indicator', () => {
    const ezdIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const loading = {
      spinning: true,
      indicator: ezdIcon,
    };
    const wrapper = render(
      <List loading={loading} dataSource={[1]} renderItem={() => <List.Item />} />,
    );
    expect(wrapper.find('.ezdicon-loading')).toHaveLength(1);
  });
});
