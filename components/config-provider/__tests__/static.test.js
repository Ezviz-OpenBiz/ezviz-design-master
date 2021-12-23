import ConfigProvider, { globalConfig } from '..';

describe('ConfigProvider.config', () => {
  it('rootPrefixCls', () => {
    expect(globalConfig().getRootPrefixCls()).toEqual('ezd');

    ConfigProvider.config({
      prefixCls: 'light',
    });
    expect(globalConfig().getRootPrefixCls()).toEqual('light');
  });
});
