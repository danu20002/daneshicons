import React from 'react';

export const iconData = {
  "id": "YearVanity",
  "name": "YearVanity",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.74 19.63 C 15.02 13.39, 20.44 14.27, 21.30 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 13.77 11.63 L 10.66 12.16 L 18.40 4.08 L 19.20 14.56"
      }
    ]
  ]
};

export const YearVanity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.74 19.63 C 15.02 13.39, 20.44 14.27, 21.30 21.48" />
      <path d="M 13.77 11.63 L 10.66 12.16 L 18.40 4.08 L 19.20 14.56" />
      {children}
    </svg>
  );
});

export default YearVanity;
