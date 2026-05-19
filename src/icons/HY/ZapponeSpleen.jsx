import React from 'react';

export const iconData = {
  "id": "ZapponeSpleen",
  "name": "ZapponeSpleen",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.17 21.34 L 11.12 16.18 L 4.40 18.86 L 7.75 12.45 L 3.13 6.90 L 10.26 8.10 L 14.11 1.99 L 15.17 9.14 L 22.17 10.92 L 15.70 14.13 Z"
      }
    ]
  ]
};

export const ZapponeSpleen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.17 21.34 L 11.12 16.18 L 4.40 18.86 L 7.75 12.45 L 3.13 6.90 L 10.26 8.10 L 14.11 1.99 L 15.17 9.14 L 22.17 10.92 L 15.70 14.13 Z" />
      {children}
    </svg>
  );
});

export default ZapponeSpleen;
