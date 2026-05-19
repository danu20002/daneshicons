import React from 'react';

export const iconData = {
  "id": "RacioComet",
  "name": "RacioComet",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.91 19.47 L 17.26 21.04 L 16.24 23.00 L 16.51 23.00 L 17.66 20.98 L 18.69 22.18 L 17.06 22.03 L 15.86 21.86 L 15.79 22.84 L 14.95 23.00 L 15.39 23.00 L 17.91 23.00 L 20.21 20.98 L 20.81 21.70 L 23.00 21.98 L 20.05 23.00 L 18.96 20.74 L 21.95 22.74 L 21.44 23.00 L 23.00 23.00 L 22.22 23.00 L 21.16 23.00 L 21.47 23.00 L 19.39 21.20 L 20.10 23.00 L 18.55 23.00 L 20.54 21.41 L 21.47 20.76 L 19.94 23.00 L 21.59 21.34 L 23.00 20.07 L 21.49 21.17 L 21.60 22.90 L 22.91 23.00"
      }
    ]
  ]
};

export const RacioComet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.91 19.47 L 17.26 21.04 L 16.24 23.00 L 16.51 23.00 L 17.66 20.98 L 18.69 22.18 L 17.06 22.03 L 15.86 21.86 L 15.79 22.84 L 14.95 23.00 L 15.39 23.00 L 17.91 23.00 L 20.21 20.98 L 20.81 21.70 L 23.00 21.98 L 20.05 23.00 L 18.96 20.74 L 21.95 22.74 L 21.44 23.00 L 23.00 23.00 L 22.22 23.00 L 21.16 23.00 L 21.47 23.00 L 19.39 21.20 L 20.10 23.00 L 18.55 23.00 L 20.54 21.41 L 21.47 20.76 L 19.94 23.00 L 21.59 21.34 L 23.00 20.07 L 21.49 21.17 L 21.60 22.90 L 22.91 23.00" />
      {children}
    </svg>
  );
});

export default RacioComet;
