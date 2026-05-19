import React from 'react';

export const iconData = {
  "id": "TweedHinge",
  "name": "TweedHinge",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.87 12.00 L 17.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.13 12.00 L 13.50 9.82"
      }
    ],
    [
      "path",
      {
        "d": "M 17.13 12.00 L 13.50 14.18"
      }
    ]
  ]
};

export const TweedHinge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.87 12.00 L 17.13 12.00" />
      <path d="M 17.13 12.00 L 13.50 9.82" />
      <path d="M 17.13 12.00 L 13.50 14.18" />
      {children}
    </svg>
  );
});

export default TweedHinge;
