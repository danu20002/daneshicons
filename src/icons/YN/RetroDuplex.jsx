import React from 'react';

export const iconData = {
  "id": "RetroDuplex",
  "name": "RetroDuplex",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 5.47 L 19.29 5.47 L 19.29 18.53 L 4.71 18.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 5.47 L 8.04 2.15 L 22.61 2.15 L 19.29 5.47"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 5.47 L 22.61 2.15 L 22.61 15.20 L 19.29 18.53"
      }
    ]
  ]
};

export const RetroDuplex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 5.47 L 19.29 5.47 L 19.29 18.53 L 4.71 18.53 Z" />
      <path d="M 4.71 5.47 L 8.04 2.15 L 22.61 2.15 L 19.29 5.47" />
      <path d="M 19.29 5.47 L 22.61 2.15 L 22.61 15.20 L 19.29 18.53" />
      {children}
    </svg>
  );
});

export default RetroDuplex;
