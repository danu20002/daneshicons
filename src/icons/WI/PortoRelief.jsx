import React from 'react';

export const iconData = {
  "id": "PortoRelief",
  "name": "PortoRelief",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 5.38 L 19.58 5.38 L 19.58 18.62 L 4.42 18.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 5.38 L 8.63 1.18 L 23.78 1.18 L 19.58 5.38"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 5.38 L 23.78 1.18 L 23.78 14.41 L 19.58 18.62"
      }
    ]
  ]
};

export const PortoRelief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 5.38 L 19.58 5.38 L 19.58 18.62 L 4.42 18.62 Z" />
      <path d="M 4.42 5.38 L 8.63 1.18 L 23.78 1.18 L 19.58 5.38" />
      <path d="M 19.58 5.38 L 23.78 1.18 L 23.78 14.41 L 19.58 18.62" />
      {children}
    </svg>
  );
});

export default PortoRelief;
