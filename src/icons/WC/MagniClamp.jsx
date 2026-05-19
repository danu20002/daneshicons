import React from 'react';

export const iconData = {
  "id": "MagniClamp",
  "name": "MagniClamp",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.45 10.68 L 15.45 10.68"
      }
    ],
    [
      "path",
      {
        "d": "M 13.32 11.45 L 13.32 15.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.55 13.32 L 8.55 13.32"
      }
    ],
    [
      "path",
      {
        "d": "M 10.68 12.55 L 10.68 8.55"
      }
    ]
  ]
};

export const MagniClamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.45 10.68 L 15.45 10.68" />
      <path d="M 13.32 11.45 L 13.32 15.45" />
      <path d="M 12.55 13.32 L 8.55 13.32" />
      <path d="M 10.68 12.55 L 10.68 8.55" />
      {children}
    </svg>
  );
});

export default MagniClamp;
