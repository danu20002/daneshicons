import React from 'react';

export const iconData = {
  "id": "VespilloCanopy",
  "name": "VespilloCanopy",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.63 10.68 L 10.63 10.68"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 6.69 L 12.45 10.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.82 8.01 L 13.82 11.47"
      }
    ],
    [
      "path",
      {
        "d": "M 17.37 13.32 L 13.37 13.32"
      }
    ],
    [
      "path",
      {
        "d": "M 13.55 17.31 L 11.55 13.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 15.99 L 10.18 12.53"
      }
    ]
  ]
};

export const VespilloCanopy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.63 10.68 L 10.63 10.68" />
      <path d="M 10.45 6.69 L 12.45 10.16" />
      <path d="M 15.82 8.01 L 13.82 11.47" />
      <path d="M 17.37 13.32 L 13.37 13.32" />
      <path d="M 13.55 17.31 L 11.55 13.84" />
      <path d="M 8.18 15.99 L 10.18 12.53" />
      {children}
    </svg>
  );
});

export default VespilloCanopy;
