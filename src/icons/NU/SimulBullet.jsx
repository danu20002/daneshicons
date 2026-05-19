import React from 'react';

export const iconData = {
  "id": "SimulBullet",
  "name": "SimulBullet",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.81 2.14 L 14.34 9.77 L 21.94 10.68 L 14.84 13.54 L 16.33 21.04 L 11.42 15.18 L 4.74 18.91 L 8.80 12.43 L 3.18 7.23 L 10.60 9.09 Z"
      }
    ]
  ]
};

export const SimulBullet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.81 2.14 L 14.34 9.77 L 21.94 10.68 L 14.84 13.54 L 16.33 21.04 L 11.42 15.18 L 4.74 18.91 L 8.80 12.43 L 3.18 7.23 L 10.60 9.09 Z" />
      {children}
    </svg>
  );
});

export default SimulBullet;
