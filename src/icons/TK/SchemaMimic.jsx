import React from 'react';

export const iconData = {
  "id": "SchemaMimic",
  "name": "SchemaMimic",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 5.54 L 20.23 5.54 L 20.23 18.46 L 3.77 18.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 5.54 L 8.59 0.72 L 25.05 0.72 L 20.23 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 5.54 L 25.05 0.72 L 25.05 13.65 L 20.23 18.46"
      }
    ]
  ]
};

export const SchemaMimic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 5.54 L 20.23 5.54 L 20.23 18.46 L 3.77 18.46 Z" />
      <path d="M 3.77 5.54 L 8.59 0.72 L 25.05 0.72 L 20.23 5.54" />
      <path d="M 20.23 5.54 L 25.05 0.72 L 25.05 13.65 L 20.23 18.46" />
      {children}
    </svg>
  );
});

export default SchemaMimic;
