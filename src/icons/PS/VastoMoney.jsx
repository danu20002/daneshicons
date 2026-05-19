import React from 'react';

export const iconData = {
  "id": "VastoMoney",
  "name": "VastoMoney",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 12.00 a 8.65 2.595280697476119 0 1 0 17.30 0 a 8.65 2.595280697476119 0 1 0 -17.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.35 A 2 2 0 0 0 12.00 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.35 A 2 2 0 0 1 12.00 20.65"
      }
    ]
  ]
};

export const VastoMoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 12.00 a 8.65 8.65 0 1 0 17.30 0 a 8.65 8.65 0 1 0 -17.30 0" />
      <path d="M 3.35 12.00 a 8.65 2.595280697476119 0 1 0 17.30 0 a 8.65 2.595280697476119 0 1 0 -17.30 0" />
      <path d="M 12.00 3.35 A 2 2 0 0 0 12.00 20.65" />
      <path d="M 12.00 3.35 A 2 2 0 0 1 12.00 20.65" />
      {children}
    </svg>
  );
});

export default VastoMoney;
