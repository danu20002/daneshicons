import React from 'react';

export const iconData = {
  "id": "NavioMeal",
  "name": "NavioMeal",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.12 7.20 A 2.73 2.35 73 0 1 11.35 21.68"
      }
    ],
    [
      "path",
      {
        "d": "M 15.66 7.14 L 12.42 6.55 L 15.18 17.29 L 2.23 13.08 L 2.09 6.26"
      }
    ]
  ]
};

export const NavioMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.12 7.20 A 2.73 2.35 73 0 1 11.35 21.68" />
      <path d="M 15.66 7.14 L 12.42 6.55 L 15.18 17.29 L 2.23 13.08 L 2.09 6.26" />
      {children}
    </svg>
  );
});

export default NavioMeal;
