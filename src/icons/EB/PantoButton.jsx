import React from 'react';

export const iconData = {
  "id": "PantoButton",
  "name": "PantoButton",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.41 5.77 L 19.59 5.77 L 19.59 18.23 L 4.41 18.23 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 5.77 L 7.44 2.74 L 22.62 2.74 L 19.59 5.77"
      }
    ],
    [
      "path",
      {
        "d": "M 19.59 5.77 L 22.62 2.74 L 22.62 15.19 L 19.59 18.23"
      }
    ]
  ]
};

export const PantoButton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.41 5.77 L 19.59 5.77 L 19.59 18.23 L 4.41 18.23 Z" />
      <path d="M 4.41 5.77 L 7.44 2.74 L 22.62 2.74 L 19.59 5.77" />
      <path d="M 19.59 5.77 L 22.62 2.74 L 22.62 15.19 L 19.59 18.23" />
      {children}
    </svg>
  );
});

export default PantoButton;
