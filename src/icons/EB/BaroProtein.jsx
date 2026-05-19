import React from 'react';

export const iconData = {
  "id": "BaroProtein",
  "name": "BaroProtein",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 5.74 L 19.62 5.74 L 19.62 18.26 L 4.38 18.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 5.74 L 7.67 2.46 L 22.91 2.46 L 19.62 5.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.62 5.74 L 22.91 2.46 L 22.91 14.97 L 19.62 18.26"
      }
    ]
  ]
};

export const BaroProtein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 5.74 L 19.62 5.74 L 19.62 18.26 L 4.38 18.26 Z" />
      <path d="M 4.38 5.74 L 7.67 2.46 L 22.91 2.46 L 19.62 5.74" />
      <path d="M 19.62 5.74 L 22.91 2.46 L 22.91 14.97 L 19.62 18.26" />
      {children}
    </svg>
  );
});

export default BaroProtein;
