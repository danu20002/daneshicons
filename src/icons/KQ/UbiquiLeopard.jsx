import React from 'react';

export const iconData = {
  "id": "UbiquiLeopard",
  "name": "UbiquiLeopard",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 6.67 L 19.05 6.67 L 19.05 17.33 L 4.95 17.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 6.67 L 8.75 2.87 L 22.84 2.87 L 19.05 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 6.67 L 22.84 2.87 L 22.84 13.54 L 19.05 17.33"
      }
    ]
  ]
};

export const UbiquiLeopard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 6.67 L 19.05 6.67 L 19.05 17.33 L 4.95 17.33 Z" />
      <path d="M 4.95 6.67 L 8.75 2.87 L 22.84 2.87 L 19.05 6.67" />
      <path d="M 19.05 6.67 L 22.84 2.87 L 22.84 13.54 L 19.05 17.33" />
      {children}
    </svg>
  );
});

export default UbiquiLeopard;
