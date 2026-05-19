import React from 'react';

export const iconData = {
  "id": "PirouTragedy",
  "name": "PirouTragedy",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 5.51 L 19.38 5.51 L 19.38 18.49 L 4.62 18.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 5.51 L 7.87 2.25 L 22.64 2.25 L 19.38 5.51"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 5.51 L 22.64 2.25 L 22.64 15.24 L 19.38 18.49"
      }
    ]
  ]
};

export const PirouTragedy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 5.51 L 19.38 5.51 L 19.38 18.49 L 4.62 18.49 Z" />
      <path d="M 4.62 5.51 L 7.87 2.25 L 22.64 2.25 L 19.38 5.51" />
      <path d="M 19.38 5.51 L 22.64 2.25 L 22.64 15.24 L 19.38 18.49" />
      {children}
    </svg>
  );
});

export default PirouTragedy;
