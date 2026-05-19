import React from 'react';

export const iconData = {
  "id": "ScapoEnforce",
  "name": "ScapoEnforce",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.85 10.16 L 6.56 8.15 L 7.34 8.57 L 9.61 7.21 L 12.09 7.41 L 14.41 8.54 L 12.53 10.18 L 12.16 12.32 L 14.42 13.59 L 11.78 11.86 L 14.11 13.03 L 16.68 12.26 L 19.27 13.90 L 17.02 15.84 L 19.05 16.46 L 20.35 14.29 L 18.01 11.63 L 20.39 9.36 L 20.60 9.53 L 23.00 11.84 L 23.00 14.48 L 20.79 14.28 L 21.83 17.26 L 23.00 19.04 L 23.00 17.07 L 23.00 18.84 L 23.00 21.30 L 23.00 23.00 L 23.00 23.00 L 20.42 23.00 L 18.57 21.42 L 20.79 22.08 L 22.13 20.27 L 21.31 20.00 L 19.40 19.22"
      }
    ]
  ]
};

export const ScapoEnforce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.85 10.16 L 6.56 8.15 L 7.34 8.57 L 9.61 7.21 L 12.09 7.41 L 14.41 8.54 L 12.53 10.18 L 12.16 12.32 L 14.42 13.59 L 11.78 11.86 L 14.11 13.03 L 16.68 12.26 L 19.27 13.90 L 17.02 15.84 L 19.05 16.46 L 20.35 14.29 L 18.01 11.63 L 20.39 9.36 L 20.60 9.53 L 23.00 11.84 L 23.00 14.48 L 20.79 14.28 L 21.83 17.26 L 23.00 19.04 L 23.00 17.07 L 23.00 18.84 L 23.00 21.30 L 23.00 23.00 L 23.00 23.00 L 20.42 23.00 L 18.57 21.42 L 20.79 22.08 L 22.13 20.27 L 21.31 20.00 L 19.40 19.22" />
      {children}
    </svg>
  );
});

export default ScapoEnforce;
