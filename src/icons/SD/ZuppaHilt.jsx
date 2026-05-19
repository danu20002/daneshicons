import React from 'react';

export const iconData = {
  "id": "ZuppaHilt",
  "name": "ZuppaHilt",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.88 2.72 L 12.11 6.28 L 17.48 2.93 L 17.01 9.24 L 22.60 12.21 L 16.90 14.96 L 17.12 21.28 L 11.89 17.72 L 6.52 21.07 L 6.99 14.76 L 1.40 11.79 L 7.10 9.04 Z"
      }
    ]
  ]
};

export const ZuppaHilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.88 2.72 L 12.11 6.28 L 17.48 2.93 L 17.01 9.24 L 22.60 12.21 L 16.90 14.96 L 17.12 21.28 L 11.89 17.72 L 6.52 21.07 L 6.99 14.76 L 1.40 11.79 L 7.10 9.04 Z" />
      {children}
    </svg>
  );
});

export default ZuppaHilt;
