---
category: Evv Design
order: 0
title: Introduction
---

<div style="text-align:center;margin:40px 0;">
  <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ">
</div>

Ezviz Financial has a large number of enterprise-level products. With complex scenarios, designers and developers often need to respond fast due to frequent changes in product demands and concurrent R & D workflow. Many similar contents exist in the process. Through abstraction, we could obtain some stable and highly reusable components and pages.

On the other hand, with the trend of commercialization, more and more enterprise products begin to pursue better user experiences. Under this situation, Ant User-Experience Design Team builds a design system for enterprise products based on four design values of Natural, Certain, Meaningful, and Growing. It aims to uniform the user interface specs and reduce redundancies and excessive production costs, helping product designers to focus on better user experience.

---

## Guidelines and Resources

We provide comprehensive design guidelines, best practices, resources, and tools to help designers produce high-quality product prototypes.

- [Design values](/docs/spec/values)
- [Design patterns](/docs/spec/overview)
- [Visualization](/docs/spec/visual)
- [Illustrations](/docs/spec/illustration)
- [Design resources](/docs/resources)
- [Sketch toolbox](http://kitchen.alipay.com/)
- [Articles](/docs/spec/article)

## Front-end Implementation

[React](http://facebook.github.io/react/) is used to encapsulate a library of components which embody our design language. We welcome the community to implement [our design system](/docs/spec/introduce) in other front-end frameworks of their choice.

```__react
import {
  ExportOutlined,
} from '@ant-design/icons';

const LinkIcon = () => (
  <ExportOutlined className="outside-link-icon" />
);

const LinksList = () => (
  <ul>
    <li>
      <a href="/docs/react/introduce" target="_blank">Evv Design of React </a>
      (official implementation)
    </li>
    {/* <li>
      <a href="http://ng.ant.design" target="_blank">
        NG-ZORRO - Ant Design of Angular
      </a>
    </li>
    <li>
      <a href="http://ng.mobile.ant.design" target="_blank">
        NG-ZORRO-MOBILE - Ant Design Mobile of Angular
      </a>
    </li>
    <li>
      <a href="http://antdv.com" target="_blank">Ant Design of Vue</a>
    </li>
    <li>
      <a href="https://ant-design-blazor.github.io/" target="_blank">
        Ant Design Blazor
      </a>
    </li>
    <li>
      <a href="https://ecomfe.github.io/santd" target="_blank">
        San UI Toolkit for Ant Design
      </a>
    </li>
    <li>
      <a href="https://github.com/priornix/antizer" target="_blank">
        antizer (ClojureScript)
      </a>
    </li> */}
  </ul>
);

ReactDOM.render(<LinksList />, mountNode);
```