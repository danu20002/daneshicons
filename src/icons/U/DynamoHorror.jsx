import React from 'react';

export const iconData = {
  "id": "DynamoHorror",
  "name": "DynamoHorror",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 17.89 L 6.11 4.68 L 19.32 6.11 L 17.89 19.32 Z"
      }
    ]
  ]
};

export const DynamoHorror = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 17.89 L 6.11 4.68 L 19.32 6.11 L 17.89 19.32 Z" />
      {children}
    </svg>
  );
});

export default DynamoHorror;
