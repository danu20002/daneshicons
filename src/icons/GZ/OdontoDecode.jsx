import React from 'react';

export const iconData = {
  "id": "OdontoDecode",
  "name": "OdontoDecode",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 5.71 L 20.54 5.71 L 20.54 18.29 L 3.46 18.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 5.71 L 7.09 2.08 L 24.17 2.08 L 20.54 5.71"
      }
    ],
    [
      "path",
      {
        "d": "M 20.54 5.71 L 24.17 2.08 L 24.17 14.66 L 20.54 18.29"
      }
    ]
  ]
};

export const OdontoDecode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 5.71 L 20.54 5.71 L 20.54 18.29 L 3.46 18.29 Z" />
      <path d="M 3.46 5.71 L 7.09 2.08 L 24.17 2.08 L 20.54 5.71" />
      <path d="M 20.54 5.71 L 24.17 2.08 L 24.17 14.66 L 20.54 18.29" />
      {children}
    </svg>
  );
});

export default OdontoDecode;
