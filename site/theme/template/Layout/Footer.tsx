import React from 'react';
import { message } from '@ezviz/ezd';
import RcFooter from 'rc-footer';
import { presetPalettes } from '@ant-design/colors';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import {
  GithubOutlined,
} from '@ant-design/icons';
import ColorPicker from '../Color/ColorPicker';
import { loadScript } from '../utils';

const getColumns = () => {
  const col1 = {
    title: <FormattedMessage id="app.footer.resources" />,
    items: [
      {
        title: 'Umi',
        description: <FormattedMessage id="app.footer.umi" />,
        url: 'https://umijs.org',
        openExternal: true,
      },
      {
        title: 'Dumi',
        description: <FormattedMessage id="app.footer.dumi" />,
        url: 'https://d.umijs.org',
        openExternal: true,
      },
      {
        title: 'qiankun',
        description: <FormattedMessage id="app.footer.qiankun" />,
        url: 'https://qiankun.umijs.org',
        openExternal: true,
      },
      {
        title: 'ahooks',
        description: <FormattedMessage id="app.footer.hooks" />,
        url: 'https://github.com/alibaba/hooks',
        openExternal: true,
      },
    ],
  };

  const col2 = {
    title: <FormattedMessage id="app.footer.community" />,
    items: [
    ],
  };

  const col3 = {
    title: <FormattedMessage id="app.footer.help" />,
    items: [
      {
        icon: <GithubOutlined />,
        title: 'GitHub',
        url: 'https://github.com/Ezviz-OpenBiz/ezviz-design-master',
        openExternal: true,
      },
    ],
  };

  const col4 = {
    icon: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
        alt="Ezd"
      />
    ),
    title: <FormattedMessage id="app.footer.more-product" />,
    items: [
      {
        title: <FormattedMessage id="app.footer.video" />,
        url: 'https://github.com/Ezviz-OpenBiz/EZUIKit-JavaScript',
        description: <FormattedMessage id="app.footer.video.slogan" />,
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: <FormattedMessage id="app.footer.yuque" />,
        url: 'https://yuque.com',
        description: <FormattedMessage id="app.footer.yuque.slogan" />,
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png"
            alt="Egg"
          />
        ),
        title: 'Egg',
        url: 'https://eggjs.org',
        description: <FormattedMessage id="app.footer.egg.slogan" />,
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
            alt="kitchen"
          />
        ),
        title: 'Kitchen',
        description: <FormattedMessage id="app.footer.kitchen" />,
        url: 'https://kitchen.alipay.com',
        openExternal: true,
      },
    ],
  };
  return [col1, col2, col3, col4];
}
class Footer extends React.Component<WrappedComponentProps & { location: any }> {
  lessLoaded = false;

  state = {
    color: presetPalettes.blue.primary,
  };

  handleColorChange = (color: string) => {
    const {
      intl: { messages },
    } = this.props;
    message.loading({
      content: messages['app.footer.primary-color-changing'],
      key: 'change-primary-color',
    });
    const changeColor = () => {
      (window as any).less
        .modifyVars({
          '@ezd-primary-color': color,
        })
        .then(() => {
          message.success({
            content: messages['app.footer.primary-color-changed'],
            key: 'change-primary-color',
          });
          this.setState({ color });
        });
    };

    const lessUrl = 'https://gw.alipayobjects.com/os/lib/less/3.10.3/dist/less.min.js';

    if (this.lessLoaded) {
      changeColor();
    } else {
      (window as any).less = {
        async: true,
        javascriptEnabled: true,
      };
      loadScript(lessUrl).then(() => {
        this.lessLoaded = true;
        changeColor();
      });
    }
  };

  renderThemeChanger() {
    const { color } = this.state;
    const colors = Object.keys(presetPalettes).filter(item => item !== 'grey');
    return (
      <ColorPicker
        small
        color={color}
        position="top"
        presetColors={[
          ...colors.map(c => presetPalettes[c][5]),
          ...colors.map(c => presetPalettes[c][4]),
          ...colors.map(c => presetPalettes[c][6]),
        ]}
        onChangeComplete={this.handleColorChange}
      />
    );
  }

  render() {
    return (
      <RcFooter
        columns={getColumns()}
        bottom={
          <>
            Made with <span style={{ color: '#fff' }}>❤</span> by
            {/* eslint-disable-next-line react/jsx-curly-brace-presence */}{' '}
              <FormattedMessage id="app.footer.company" />
          </>
        }
      />
    );
  }
}

export default injectIntl(Footer);
