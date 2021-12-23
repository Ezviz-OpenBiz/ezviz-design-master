/*
 * @Author: zhoukaidi@hikvision.com.cn
 * @Date: 2021-11-16 15:06:04
 * @LastEditors: zhoukaidi@hikvision.com.cn
 * @LastEditTime: 2021-11-17 15:00:26
 */
import * as React from 'react';
import { Link } from 'bisheng/router';
import * as utils from '../../utils';

import './Logo.less';

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}
// const isDev = process.env.NODE_ENV === 'development';
const rootUrl = '/';
const Logo = ({ isZhCN, location }: LogoProps) => (
  <h1>
    <Link to={utils.getLocalizedPathname(rootUrl, isZhCN, location.query)} id="logo">
      <img alt="logo" src="https://es.ys7.com/ys/img/logo.256e18ae.png" />
      EZ Design
    </Link>
  </h1>
);

export default Logo;
