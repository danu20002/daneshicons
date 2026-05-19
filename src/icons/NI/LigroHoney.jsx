import React from 'react';

export const iconData = {
  "id": "LigroHoney",
  "name": "LigroHoney",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.02 8.27 L 13.02 8.27"
      }
    ],
    [
      "path",
      {
        "d": "M 15.73 9.02 L 15.73 13.02"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 15.73 L 10.98 15.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 14.98 L 8.27 10.98"
      }
    ]
  ]
};

export const LigroHoney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.02 8.27 L 13.02 8.27" />
      <path d="M 15.73 9.02 L 15.73 13.02" />
      <path d="M 14.98 15.73 L 10.98 15.73" />
      <path d="M 8.27 14.98 L 8.27 10.98" />
      {children}
    </svg>
  );
});

export default LigroHoney;
