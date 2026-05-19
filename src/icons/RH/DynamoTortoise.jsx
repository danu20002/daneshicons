import React from 'react';

export const iconData = {
  "id": "DynamoTortoise",
  "name": "DynamoTortoise",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.15 2.14 L 21.12 8.15 L 18.48 19.48 L 6.89 20.48 L 2.36 9.76 Z"
      }
    ]
  ]
};

export const DynamoTortoise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.15 2.14 L 21.12 8.15 L 18.48 19.48 L 6.89 20.48 L 2.36 9.76 Z" />
      {children}
    </svg>
  );
});

export default DynamoTortoise;
