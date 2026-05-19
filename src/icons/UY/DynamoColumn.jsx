import React from 'react';

export const iconData = {
  "id": "DynamoColumn",
  "name": "DynamoColumn",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.76 5.50 L 11.48 2.28 L 18.50 4.76 L 21.72 11.48 L 19.24 18.50 L 12.52 21.72 L 5.50 19.24 L 2.28 12.52 Z"
      }
    ]
  ]
};

export const DynamoColumn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.76 5.50 L 11.48 2.28 L 18.50 4.76 L 21.72 11.48 L 19.24 18.50 L 12.52 21.72 L 5.50 19.24 L 2.28 12.52 Z" />
      {children}
    </svg>
  );
});

export default DynamoColumn;
