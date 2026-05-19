import React from 'react';

export const iconData = {
  "id": "ZonzoHear",
  "name": "ZonzoHear",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.01 2.74 L 12.55 7.28 L 18.02 3.92 L 16.37 10.12 L 22.01 13.17 L 15.81 14.84 L 15.99 21.26 L 11.45 16.72 L 5.98 20.08 L 7.63 13.88 L 1.99 10.83 L 8.19 9.16 Z"
      }
    ]
  ]
};

export const ZonzoHear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.01 2.74 L 12.55 7.28 L 18.02 3.92 L 16.37 10.12 L 22.01 13.17 L 15.81 14.84 L 15.99 21.26 L 11.45 16.72 L 5.98 20.08 L 7.63 13.88 L 1.99 10.83 L 8.19 9.16 Z" />
      {children}
    </svg>
  );
});

export default ZonzoHear;
