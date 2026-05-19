import React from 'react';

export const iconData = {
  "id": "XilofagoMidst",
  "name": "XilofagoMidst",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.06 5.24 L 13.81 6.65 L 20.83 10.23 L 15.73 16.24 L 9.12 20.53 L 6.46 13.11 Z"
      }
    ]
  ]
};

export const XilofagoMidst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.06 5.24 L 13.81 6.65 L 20.83 10.23 L 15.73 16.24 L 9.12 20.53 L 6.46 13.11 Z" />
      {children}
    </svg>
  );
});

export default XilofagoMidst;
