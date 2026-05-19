import React from 'react';

export const iconData = {
  "id": "PhagoGeneral",
  "name": "PhagoGeneral",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 6.39 L 19.95 6.39 L 19.95 17.61 L 4.05 17.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.39 L 7.46 2.98 L 23.36 2.98 L 19.95 6.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 6.39 L 23.36 2.98 L 23.36 14.21 L 19.95 17.61"
      }
    ]
  ]
};

export const PhagoGeneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 6.39 L 19.95 6.39 L 19.95 17.61 L 4.05 17.61 Z" />
      <path d="M 4.05 6.39 L 7.46 2.98 L 23.36 2.98 L 19.95 6.39" />
      <path d="M 19.95 6.39 L 23.36 2.98 L 23.36 14.21 L 19.95 17.61" />
      {children}
    </svg>
  );
});

export default PhagoGeneral;
