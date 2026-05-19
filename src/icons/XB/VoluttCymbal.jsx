import React from 'react';

export const iconData = {
  "id": "VoluttCymbal",
  "name": "VoluttCymbal",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 6.71 L 20.27 6.71 L 20.27 17.29 L 3.73 17.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 6.71 L 7.36 3.08 L 23.91 3.08 L 20.27 6.71"
      }
    ],
    [
      "path",
      {
        "d": "M 20.27 6.71 L 23.91 3.08 L 23.91 13.65 L 20.27 17.29"
      }
    ]
  ]
};

export const VoluttCymbal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 6.71 L 20.27 6.71 L 20.27 17.29 L 3.73 17.29 Z" />
      <path d="M 3.73 6.71 L 7.36 3.08 L 23.91 3.08 L 20.27 6.71" />
      <path d="M 20.27 6.71 L 23.91 3.08 L 23.91 13.65 L 20.27 17.29" />
      {children}
    </svg>
  );
});

export default VoluttCymbal;
