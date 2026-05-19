import React from 'react';

export const iconData = {
  "id": "RhizoScrub",
  "name": "RhizoScrub",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.12 16.17 L 2.42 9.66 L 14.97 4.95 L 9.83 7.98 L 10.07 14.54 L 21.80 5.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 18.96 A 6.19 5.69 140 0 0 9.67 3.74"
      }
    ]
  ]
};

export const RhizoScrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.12 16.17 L 2.42 9.66 L 14.97 4.95 L 9.83 7.98 L 10.07 14.54 L 21.80 5.16" />
      <path d="M 6.38 18.96 A 6.19 5.69 140 0 0 9.67 3.74" />
      {children}
    </svg>
  );
});

export default RhizoScrub;
