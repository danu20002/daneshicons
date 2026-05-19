import React from 'react';

export const iconData = {
  "id": "SchemaProve",
  "name": "SchemaProve",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.50 21.73 L 10.58 17.82 L 6.18 19.94 L 6.88 15.11 L 2.27 13.50 L 6.18 10.58 L 4.06 6.18 L 8.89 6.88 L 10.50 2.27 L 13.42 6.18 L 17.82 4.06 L 17.12 8.89 L 21.73 10.50 L 17.82 13.42 L 19.94 17.82 L 15.11 17.12 Z"
      }
    ]
  ]
};

export const SchemaProve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.50 21.73 L 10.58 17.82 L 6.18 19.94 L 6.88 15.11 L 2.27 13.50 L 6.18 10.58 L 4.06 6.18 L 8.89 6.88 L 10.50 2.27 L 13.42 6.18 L 17.82 4.06 L 17.12 8.89 L 21.73 10.50 L 17.82 13.42 L 19.94 17.82 L 15.11 17.12 Z" />
      {children}
    </svg>
  );
});

export default SchemaProve;
