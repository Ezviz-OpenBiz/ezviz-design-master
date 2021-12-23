import React from 'react';
import { render, mount } from 'enzyme';
import List from '..';
import ConfigProvider from '../../config-provider';

describe('List Item Layout', () => {
  const data = [
    {
      key: 1,
      href: 'https://saastest3.ys7.com/ezd/',
      title: `EZ Design`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'EZ Design, a design language for background applications, is refined by EZVIZ Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      extra: 'extra',
    },
  ];

  it('horizontal itemLayout List which contains string nodes should not be flex container', () => {
    const wrapper = mount(
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.title}>
            I am <span>ezd</span> design list item
          </List.Item>
        )}
      />,
    );
    expect(wrapper.find('.ezd-list-item').at(0).hasClass('ezd-list-item-no-flex')).toBe(true);
  });

  it('horizontal itemLayout List should be flex container defaultly', () => {
    const wrapper = mount(
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.title}>
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />,
    );
    expect(wrapper.find('.ezd-list-item').at(0).hasClass('ezd-list-item-no-flex')).toBe(false);
  });

  it('vertical itemLayout List should be flex container when there is extra node', () => {
    const wrapper = mount(
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.title} extra={item.extra}>
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />,
    );
    expect(wrapper.find('.ezd-list-item').at(0).hasClass('ezd-list-item-no-flex')).toBe(false);
  });

  it('vertical itemLayout List should not be flex container when there is not extra node', () => {
    const wrapper = mount(
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.title}>
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />,
    );
    expect(wrapper.find('.ezd-list-item').at(0).hasClass('ezd-list-item-no-flex')).toBe(true);
  });

  it('horizontal itemLayout List should accept extra node', () => {
    const wrapper = mount(
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<a key="action">Action</a>]}
            extra={<span>{item.extra}</span>}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render in RTL direction', () => {
    const wrapper = mount(
      <ConfigProvider direction="rtl">
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<a key="action">Action</a>]}
              extra={<span>{item.extra}</span>}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </ConfigProvider>,
    );
    expect(render(wrapper)).toMatchSnapshot();
  });

  it('rowKey could be string', () => {
    const dataWithId = [
      {
        id: 1,
        title: `EZ Design`,
      },
      {
        id: 2,
        title: `EZ Design`,
      },
      {
        id: 3,
        title: `EZ Design`,
      },
    ];
    const wrapper = mount(
      <List
        dataSource={dataWithId}
        rowKey="id"
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('rowKey could be function', () => {
    const dataWithId = [
      {
        id: 1,
        title: `EZ Design`,
      },
      {
        id: 2,
        title: `EZ Design`,
      },
      {
        id: 3,
        title: `EZ Design`,
      },
    ];
    const wrapper = mount(
      <List
        dataSource={dataWithId}
        rowKey={item => item.id}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
