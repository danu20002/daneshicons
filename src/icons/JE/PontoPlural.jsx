import React from 'react';

export const iconData = {
  "id": "PontoPlural",
  "name": "PontoPlural",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 5.02 L 19.58 5.02 L 19.58 18.98 L 4.42 18.98 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 5.02 L 8.46 0.99 L 23.62 0.99 L 19.58 5.02"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 5.02 L 23.62 0.99 L 23.62 14.94 L 19.58 18.98"
      }
    ]
  ]
};

export const PontoPlural = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 5.02 L 19.58 5.02 L 19.58 18.98 L 4.42 18.98 Z" />
      <path d="M 4.42 5.02 L 8.46 0.99 L 23.62 0.99 L 19.58 5.02" />
      <path d="M 19.58 5.02 L 23.62 0.99 L 23.62 14.94 L 19.58 18.98" />
      {children}
    </svg>
  );
});

export default PontoPlural;
