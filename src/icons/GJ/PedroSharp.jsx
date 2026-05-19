import React from 'react';

export const iconData = {
  "id": "PedroSharp",
  "name": "PedroSharp",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.71 2.57 L 17.76 4.41 L 21.43 10.71 L 19.59 17.76 L 13.29 21.43 L 6.24 19.59 L 2.57 13.29 L 4.41 6.24 Z"
      }
    ]
  ]
};

export const PedroSharp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.71 2.57 L 17.76 4.41 L 21.43 10.71 L 19.59 17.76 L 13.29 21.43 L 6.24 19.59 L 2.57 13.29 L 4.41 6.24 Z" />
      {children}
    </svg>
  );
});

export default PedroSharp;
