import React from 'react';

export const iconData = {
  "id": "PhasoGist",
  "name": "PhasoGist",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 18.68 A 6.07 3.35 146 0 1 10.86 4.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 9.62 L 15.85 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 9.83 A 5.71 6.54 69 0 0 5.04 21.56"
      }
    ]
  ]
};

export const PhasoGist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 18.68 A 6.07 3.35 146 0 1 10.86 4.37" />
      <path d="M 5.54 9.62 L 15.85 21.00" />
      <path d="M 5.41 9.83 A 5.71 6.54 69 0 0 5.04 21.56" />
      {children}
    </svg>
  );
});

export default PhasoGist;
