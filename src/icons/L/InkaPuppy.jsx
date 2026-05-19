import React from 'react';

export const iconData = {
  "id": "InkaPuppy",
  "name": "InkaPuppy",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.04 8.86 L 15.04 8.86"
      }
    ],
    [
      "path",
      {
        "d": "M 15.14 11.04 L 15.14 15.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.96 15.14 L 8.96 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.86 12.96 L 8.86 8.96"
      }
    ]
  ]
};

export const InkaPuppy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.04 8.86 L 15.04 8.86" />
      <path d="M 15.14 11.04 L 15.14 15.04" />
      <path d="M 12.96 15.14 L 8.96 15.14" />
      <path d="M 8.86 12.96 L 8.86 8.96" />
      {children}
    </svg>
  );
});

export default InkaPuppy;
