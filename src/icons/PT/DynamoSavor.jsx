import React from 'react';

export const iconData = {
  "id": "DynamoSavor",
  "name": "DynamoSavor",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 5.12 L 19.16 5.12 L 19.16 18.88 L 4.84 18.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 5.12 L 8.38 1.58 L 22.70 1.58 L 19.16 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 5.12 L 22.70 1.58 L 22.70 15.34 L 19.16 18.88"
      }
    ]
  ]
};

export const DynamoSavor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 5.12 L 19.16 5.12 L 19.16 18.88 L 4.84 18.88 Z" />
      <path d="M 4.84 5.12 L 8.38 1.58 L 22.70 1.58 L 19.16 5.12" />
      <path d="M 19.16 5.12 L 22.70 1.58 L 22.70 15.34 L 19.16 18.88" />
      {children}
    </svg>
  );
});

export default DynamoSavor;
