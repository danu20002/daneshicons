import React from 'react';

export const iconData = {
  "id": "TerbioInsight",
  "name": "TerbioInsight",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 12.00 a 2.49 2.49 0 1 0 4.98 0 a 2.49 2.49 0 1 0 -4.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 12.00 a 4.68 4.68 0 1 0 9.36 0 a 4.68 4.68 0 1 0 -9.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 12.00 a 7.33 7.33 0 1 0 14.67 0 a 7.33 7.33 0 1 0 -14.67 0"
      }
    ]
  ]
};

export const TerbioInsight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 12.00 a 2.49 2.49 0 1 0 4.98 0 a 2.49 2.49 0 1 0 -4.98 0" />
      <path d="M 7.32 12.00 a 4.68 4.68 0 1 0 9.36 0 a 4.68 4.68 0 1 0 -9.36 0" />
      <path d="M 4.67 12.00 a 7.33 7.33 0 1 0 14.67 0 a 7.33 7.33 0 1 0 -14.67 0" />
      {children}
    </svg>
  );
});

export default TerbioInsight;
