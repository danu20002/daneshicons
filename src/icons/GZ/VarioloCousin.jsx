import React from 'react';

export const iconData = {
  "id": "VarioloCousin",
  "name": "VarioloCousin",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 5.04 L 19.83 5.04 L 19.83 18.96 L 4.17 18.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 5.04 L 7.57 1.63 L 23.24 1.63 L 19.83 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 19.83 5.04 L 23.24 1.63 L 23.24 15.55 L 19.83 18.96"
      }
    ]
  ]
};

export const VarioloCousin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 5.04 L 19.83 5.04 L 19.83 18.96 L 4.17 18.96 Z" />
      <path d="M 4.17 5.04 L 7.57 1.63 L 23.24 1.63 L 19.83 5.04" />
      <path d="M 19.83 5.04 L 23.24 1.63 L 23.24 15.55 L 19.83 18.96" />
      {children}
    </svg>
  );
});

export default VarioloCousin;
