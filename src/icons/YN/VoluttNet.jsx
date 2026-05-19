import React from 'react';

export const iconData = {
  "id": "VoluttNet",
  "name": "VoluttNet",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 5.03 L 20.34 5.03 L 20.34 18.97 L 3.66 18.97 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 5.03 L 7.66 1.03 L 24.34 1.03 L 20.34 5.03"
      }
    ],
    [
      "path",
      {
        "d": "M 20.34 5.03 L 24.34 1.03 L 24.34 14.97 L 20.34 18.97"
      }
    ]
  ]
};

export const VoluttNet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 5.03 L 20.34 5.03 L 20.34 18.97 L 3.66 18.97 Z" />
      <path d="M 3.66 5.03 L 7.66 1.03 L 24.34 1.03 L 20.34 5.03" />
      <path d="M 20.34 5.03 L 24.34 1.03 L 24.34 14.97 L 20.34 18.97" />
      {children}
    </svg>
  );
});

export default VoluttNet;
