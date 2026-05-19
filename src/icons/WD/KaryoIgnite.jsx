import React from 'react';

export const iconData = {
  "id": "KaryoIgnite",
  "name": "KaryoIgnite",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.70 19.82 L 16.19 15.71 L 9.10 2.37 L 16.13 10.34 L 3.83 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 8.98 L 8.89 14.93"
      }
    ]
  ]
};

export const KaryoIgnite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.70 19.82 L 16.19 15.71 L 9.10 2.37 L 16.13 10.34 L 3.83 20.07" />
      <path d="M 5.26 8.98 L 8.89 14.93" />
      {children}
    </svg>
  );
});

export default KaryoIgnite;
