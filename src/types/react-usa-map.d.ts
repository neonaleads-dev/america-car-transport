declare module 'react-usa-map' {
  import React from 'react';
  
  interface USAState {
    fill?: string;
    clickHandler?: (event: React.MouseEvent<SVGPathElement>) => void;
  }

  interface USAMapProps {
    customize?: Record<string, USAState>;
    onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
    width?: number | string;
    height?: number | string;
    title?: string;
    defaultFill?: string;
  }

  const USAMap: React.FC<USAMapProps>;
  export default USAMap;
}
