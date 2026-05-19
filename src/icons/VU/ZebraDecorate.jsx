import React from 'react';

export const iconData = {
  "id": "ZebraDecorate",
  "name": "ZebraDecorate",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.49 21.91 L 11.07 15.28 L 4.66 19.11 L 8.69 12.83 L 2.17 9.20 L 9.63 9.55 L 9.51 2.09 L 12.93 8.72 L 19.34 4.89 L 15.31 11.17 L 21.83 14.80 L 14.37 14.45 Z"
      }
    ]
  ]
};

export const ZebraDecorate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.49 21.91 L 11.07 15.28 L 4.66 19.11 L 8.69 12.83 L 2.17 9.20 L 9.63 9.55 L 9.51 2.09 L 12.93 8.72 L 19.34 4.89 L 15.31 11.17 L 21.83 14.80 L 14.37 14.45 Z" />
      {children}
    </svg>
  );
});

export default ZebraDecorate;
