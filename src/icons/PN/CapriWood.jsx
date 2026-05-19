import React from 'react';

export const iconData = {
  "id": "CapriWood",
  "name": "CapriWood",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.17 10.07 L 15.17 10.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.93 11.17 L 13.93 15.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.83 13.93 L 8.83 13.93"
      }
    ],
    [
      "path",
      {
        "d": "M 10.07 12.83 L 10.07 8.83"
      }
    ]
  ]
};

export const CapriWood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.17 10.07 L 15.17 10.07" />
      <path d="M 13.93 11.17 L 13.93 15.17" />
      <path d="M 12.83 13.93 L 8.83 13.93" />
      <path d="M 10.07 12.83 L 10.07 8.83" />
      {children}
    </svg>
  );
});

export default CapriWood;
