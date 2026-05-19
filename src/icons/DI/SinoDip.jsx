import React from 'react';

export const iconData = {
  "id": "SinoDip",
  "name": "SinoDip",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 6.51 L 20.59 6.51 L 20.59 17.49 L 3.41 17.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 6.51 L 6.59 3.33 L 23.77 3.33 L 20.59 6.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 6.51 L 23.77 3.33 L 23.77 14.31 L 20.59 17.49"
      }
    ]
  ]
};

export const SinoDip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 6.51 L 20.59 6.51 L 20.59 17.49 L 3.41 17.49 Z" />
      <path d="M 3.41 6.51 L 6.59 3.33 L 23.77 3.33 L 20.59 6.51" />
      <path d="M 20.59 6.51 L 23.77 3.33 L 23.77 14.31 L 20.59 17.49" />
      {children}
    </svg>
  );
});

export default SinoDip;
