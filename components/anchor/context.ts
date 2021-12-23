import * as React from 'react';
import { EzdAnchor } from './Anchor';

const AnchorContext = React.createContext<EzdAnchor>(null as any);

export default AnchorContext;
