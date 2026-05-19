import React from 'react';

export const iconData = {
  "id": "VibratoFlesh",
  "name": "VibratoFlesh",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 6.99 L 20.49 6.99 L 20.49 17.01 L 3.51 17.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 6.99 L 7.32 3.18 L 24.31 3.18 L 20.49 6.99"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 6.99 L 24.31 3.18 L 24.31 13.19 L 20.49 17.01"
      }
    ]
  ]
};

export const VibratoFlesh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 6.99 L 20.49 6.99 L 20.49 17.01 L 3.51 17.01 Z" />
      <path d="M 3.51 6.99 L 7.32 3.18 L 24.31 3.18 L 20.49 6.99" />
      <path d="M 20.49 6.99 L 24.31 3.18 L 24.31 13.19 L 20.49 17.01" />
      {children}
    </svg>
  );
});

export default VibratoFlesh;
