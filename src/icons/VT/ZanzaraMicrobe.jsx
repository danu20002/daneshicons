import React from 'react';

export const iconData = {
  "id": "ZanzaraMicrobe",
  "name": "ZanzaraMicrobe",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.04 19.36 L 8.76 19.75 L 3.93 14.30 L 5.17 7.12 L 11.55 3.62 L 18.28 6.42 L 20.27 13.43 Z"
      }
    ]
  ]
};

export const ZanzaraMicrobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.04 19.36 L 8.76 19.75 L 3.93 14.30 L 5.17 7.12 L 11.55 3.62 L 18.28 6.42 L 20.27 13.43 Z" />
      {children}
    </svg>
  );
});

export default ZanzaraMicrobe;
