import React from 'react';

export const iconData = {
  "id": "FernoOvert",
  "name": "FernoOvert",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 6.43 L 19.94 6.43 L 19.94 17.57 L 4.06 17.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 6.43 L 8.94 1.54 L 24.83 1.54 L 19.94 6.43"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 6.43 L 24.83 1.54 L 24.83 12.68 L 19.94 17.57"
      }
    ]
  ]
};

export const FernoOvert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 6.43 L 19.94 6.43 L 19.94 17.57 L 4.06 17.57 Z" />
      <path d="M 4.06 6.43 L 8.94 1.54 L 24.83 1.54 L 19.94 6.43" />
      <path d="M 19.94 6.43 L 24.83 1.54 L 24.83 12.68 L 19.94 17.57" />
      {children}
    </svg>
  );
});

export default FernoOvert;
