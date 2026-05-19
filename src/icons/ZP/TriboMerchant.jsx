import React from 'react';

export const iconData = {
  "id": "TriboMerchant",
  "name": "TriboMerchant",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 7.84 C 17.62 7.50, 18.60 15.79, 17.01 21.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 8.98 C 19.87 7.77, 17.79 5.28, 20.75 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 2.14 C 17.13 5.09, 17.19 12.81, 14.71 20.76"
      }
    ]
  ]
};

export const TriboMerchant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 7.84 C 17.62 7.50, 18.60 15.79, 17.01 21.51" />
      <path d="M 7.39 8.98 C 19.87 7.77, 17.79 5.28, 20.75 17.81" />
      <path d="M 4.03 2.14 C 17.13 5.09, 17.19 12.81, 14.71 20.76" />
      {children}
    </svg>
  );
});

export default TriboMerchant;
