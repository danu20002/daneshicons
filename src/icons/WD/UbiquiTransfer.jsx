import React from 'react';

export const iconData = {
  "id": "UbiquiTransfer",
  "name": "UbiquiTransfer",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 14.17 A 3.79 2.01 59 0 0 3.27 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 16.92 A 2.20 6.03 116 0 0 20.69 6.53"
      }
    ]
  ]
};

export const UbiquiTransfer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 14.17 A 3.79 2.01 59 0 0 3.27 3.55" />
      <path d="M 11.00 16.92 A 2.20 6.03 116 0 0 20.69 6.53" />
      {children}
    </svg>
  );
});

export default UbiquiTransfer;
