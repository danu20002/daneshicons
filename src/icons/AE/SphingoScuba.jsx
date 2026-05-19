import React from 'react';

export const iconData = {
  "id": "SphingoScuba",
  "name": "SphingoScuba",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.15 11.30 L 13.15 11.30"
      }
    ],
    [
      "path",
      {
        "d": "M 14.03 9.88 L 12.03 13.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.82 14.81 L 10.82 11.35"
      }
    ]
  ]
};

export const SphingoScuba = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.15 11.30 L 13.15 11.30" />
      <path d="M 14.03 9.88 L 12.03 13.35" />
      <path d="M 12.82 14.81 L 10.82 11.35" />
      {children}
    </svg>
  );
});

export default SphingoScuba;
