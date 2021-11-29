/*
 * @Author: zhoukaidi@hikvision.com.cn
 * @Date: 2021-11-16 15:06:04
 * @LastEditors: zhoukaidi@hikvision.com.cn
 * @LastEditTime: 2021-11-17 14:59:10
 */
import * as React from 'react';
import classNames from 'classnames';
import GitHubButton from 'react-github-button';
import './Github.less';

export interface GithubProps {
  responsive: null | 'narrow' | 'crowded';
}

export default ({ responsive }: GithubProps) => (
  <GitHubButton
    id="github-btn"
    className={classNames({
      'responsive-mode': responsive,
      [`responsive-${responsive}`]: responsive,
    })}
    type="stargazers"
    namespace="ezviz-saas" // GitHub id 或组织名称
    repo="ezviz-design-master" // 存储库的名称
  />
);
