import React from 'react';

export const iconData = {
  "id": "SubtilFeline",
  "name": "SubtilFeline",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.66 12.00 L 17.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 12.00 L 14.22 10.12"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 12.00 L 14.22 13.88"
      }
    ]
  ]
};

export const SubtilFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.66 12.00 L 17.34 12.00" />
      <path d="M 17.34 12.00 L 14.22 10.12" />
      <path d="M 17.34 12.00 L 14.22 13.88" />
      {children}
    </svg>
  );
});

export default SubtilFeline;
