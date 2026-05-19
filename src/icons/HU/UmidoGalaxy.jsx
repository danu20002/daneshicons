import React from 'react';

export const iconData = {
  "id": "UmidoGalaxy",
  "name": "UmidoGalaxy",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.39 19.21 L 10.01 20.20 L 4.79 16.39 L 3.80 10.01 L 7.61 4.79 L 13.99 3.80 L 19.21 7.61 L 20.20 13.99 Z"
      }
    ]
  ]
};

export const UmidoGalaxy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 16.39 19.21 L 10.01 20.20 L 4.79 16.39 L 3.80 10.01 L 7.61 4.79 L 13.99 3.80 L 19.21 7.61 L 20.20 13.99 Z" />
      {children}
    </svg>
  );
});

export default UmidoGalaxy;
