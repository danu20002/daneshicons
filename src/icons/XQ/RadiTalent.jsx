import React from 'react';

export const iconData = {
  "id": "RadiTalent",
  "name": "RadiTalent",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.47 12.14 L 16.62 20.27 L 7.15 20.13 L 2.53 11.86 L 7.38 3.73 L 16.85 3.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.92 14.40 L 12.88 18.32 L 6.97 15.92 L 6.08 9.60 L 11.12 5.68 L 17.03 8.08 Z"
      }
    ]
  ]
};

export const RadiTalent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.47 12.14 L 16.62 20.27 L 7.15 20.13 L 2.53 11.86 L 7.38 3.73 L 16.85 3.87 Z" />
      <path d="M 17.92 14.40 L 12.88 18.32 L 6.97 15.92 L 6.08 9.60 L 11.12 5.68 L 17.03 8.08 Z" />
      {children}
    </svg>
  );
});

export default RadiTalent;
