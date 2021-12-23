import * as React from 'react';
import { Row, Col, Typography } from '@ezviz/ezd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'bisheng/router';
import { getLocalizedPathname } from '../../utils';
import './index.less';
import Certainty from './Certainty';
import Meaningful from './Meaningful';
import Growth from './Growth';
import Natural from './Natural';
import SiteContext from '../../Layout/SiteContext';

const { Title } = Typography;

const DesignPage = (props: { location: any }) => {
  const { location } = props;
  const { locale } = useIntl();
  const isZhCN = locale === 'zh-CN';
  const { direction } = React.useContext(SiteContext);
  let IconComponent = <RightOutlined className="home-link-arrow" />;

  if (direction === 'rtl') {
    IconComponent = <LeftOutlined className="home-link-arrow home-link-arrow-rtl" />;
  }

  const smallStyle = { fontSize: 12, color: '#888', marginLeft: '0.3em' };

  return (
    <div style={{ marginBottom: -28 }}>
      {/* ***************************** Group 1 ***************************** */}
      <Row gutter={[40, 40]}>
        {/* *********************** Design Values *********************** */}
        <Col span={24}>
          <div className="design-card main-card">
            <Title level={3}>
              <FormattedMessage id="app.home.design-values" />
            </Title>

            <Row align="stretch">
              <Col xs={24} sm={8}>
                <FormattedMessage id="app.home.design-values-description" />

                <Link
                  className="design-card-detail"
                  to={getLocalizedPathname('/docs/spec/values', isZhCN, location.query)}
                >
                  <FormattedMessage id="app.home.detail" />
                  {IconComponent}
                </Link>
              </Col>
              <Col xs={24} sm={16}>
                <Row className="design-values">
                  <Col xs={12} sm={6}>
                    <img
                      alt="certainty"
                      src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*43rfS4dD0MUAAAAAAAAAAABkARQnAQ"
                    />
                    <Certainty />
                    <h4>
                      <FormattedMessage id="app.home.certainty" />
                    </h4>
                  </Col>
                  <Col xs={12} sm={6}>
                    <img
                      alt="meaningful"
                      src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*abGUQKUocSMAAAAAAAAAAABkARQnAQ"
                    />
                    <Meaningful />
                    <h4>
                      <FormattedMessage id="app.home.meaningful" />
                    </h4>
                  </Col>
                  <Col xs={12} sm={6}>
                    <img
                      alt="growth"
                      src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*NvhsRKmTLwUAAAAAAAAAAABkARQnAQ"
                    />
                    <Growth />
                    <h4>
                      <FormattedMessage id="app.home.growth" />
                    </h4>
                  </Col>
                  <Col xs={12} sm={6}>
                    <img
                      alt="natural"
                      src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*cY0tTr8q3Y4AAAAAAAAAAABkARQnAQ"
                    />
                    <Natural />
                    <h4>
                      <FormattedMessage id="app.home.natural" />
                    </h4>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>

        {/* *********************** Design Guides *********************** */}
        <Col xs={24} sm={12}>
          <div
            className="design-card sub-card"
            style={{
              background: '#E6F1FF',
              backgroundImage:
                'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*0oaHSYRcnT4AAAAAAAAAAABkARQnAQ)',
            }}
          >
            <Row>
              <Col xs={24} sm={9} className="card-info">
                <Title level={3}>
                  <FormattedMessage id="app.home.design-guide" />
                </Title>

                <ul>
                  <li>
                    <Link to={getLocalizedPathname('/docs/spec/colors', isZhCN, location.query)}>
                      <FormattedMessage id="app.home.global-style" />
                      {IconComponent}
                    </Link>
                  </li>
                  <li>
                    <Link to={getLocalizedPathname('/docs/spec/overview', isZhCN, location.query)}>
                      <FormattedMessage id="app.home.design-patterns" />
                      {IconComponent}
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col
                xs={24}
                sm={15}
                className="design-card-img-col"
                style={{ alignSelf: 'flex-end', textAlign: 'right' }}
              >
                <img
                  alt="design guide"
                  style={{ maxHeight: 278, maxWidth: '100%' }}
                  src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*5PRzTL4pwuYAAAAAAAAAAABkARQnAQ"
                />
              </Col>
            </Row>
          </div>
        </Col>

        {/* ************************* Component ************************* */}
        <Col xs={24} sm={12}>
          <div
            className="design-card sub-card"
            style={{
              background: '#DEF6FF',
              backgroundImage:
                'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*TLJTT78n7rMAAAAAAAAAAABkARQnAQ)',
            }}
          >
            <Row>
              <Col xs={24} sm={12} className="card-info">
                <Title level={3}>
                  <FormattedMessage id="app.home.components" />
                </Title>

                <ul>
                  <li>
                    <Link
                      to={getLocalizedPathname('/docs/react/introduce', isZhCN, location.query)}
                    >
                      EZ Design of React
                    </Link>
                    <span style={smallStyle}>
                      (<FormattedMessage id="app.implementation.official" />)
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={24} sm={12} style={{ alignSelf: 'flex-end', textAlign: 'right' }}>
                <img
                  alt="components"
                  className="design-card-img-col"
                  style={{ maxHeight: 278, maxWidth: '100%' }}
                  src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*8VDFTbQn4UAAAAAAAAAAAABkARQnAQ"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {/* ***************************** Group 2 ***************************** */}
      {/* @ezviz/ezd其他关联组件库 */}
    </div>
  );
};

export default DesignPage;
