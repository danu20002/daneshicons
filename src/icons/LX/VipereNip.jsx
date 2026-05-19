import React from 'react';

export const iconData = {
  "id": "VipereNip",
  "name": "VipereNip",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.79 21.33 L 4.72 5.85 L 9.45 16.02 L 20.00 2.02"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 16.58 C 20.19 16.29, 19.82 3.97, 5.26 10.06"
      }
    ]
  ]
};

export const VipereNip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.79 21.33 L 4.72 5.85 L 9.45 16.02 L 20.00 2.02" />
      <path d="M 18.57 16.58 C 20.19 16.29, 19.82 3.97, 5.26 10.06" />
      {children}
    </svg>
  );
});

export default VipereNip;
