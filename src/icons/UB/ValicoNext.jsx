import React from 'react';

export const iconData = {
  "id": "ValicoNext",
  "name": "ValicoNext",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.48 9.21 L 15.37 7.91 L 17.19 8.44 L 17.96 10.30 L 17.89 12.88 L 15.51 12.72 L 18.04 14.29 L 19.87 16.38 L 18.35 14.74 L 18.99 13.99 L 16.62 16.82 L 14.07 17.40 L 14.43 15.21 L 14.53 12.64 L 12.16 11.45 L 10.52 13.94 L 11.21 15.64 L 11.66 17.26"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 13.61 L 17.83 15.00 L 18.55 15.22 L 17.18 16.63 L 19.15 18.21 L 19.74 17.38 L 20.27 18.66 L 22.17 21.46 L 23.00 19.57 L 20.75 17.11 L 18.89 15.46 L 18.12 14.51 L 19.17 13.50 L 21.69 13.39 L 23.00 11.00 L 20.42 9.55 L 21.45 7.44"
      }
    ]
  ]
};

export const ValicoNext = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.48 9.21 L 15.37 7.91 L 17.19 8.44 L 17.96 10.30 L 17.89 12.88 L 15.51 12.72 L 18.04 14.29 L 19.87 16.38 L 18.35 14.74 L 18.99 13.99 L 16.62 16.82 L 14.07 17.40 L 14.43 15.21 L 14.53 12.64 L 12.16 11.45 L 10.52 13.94 L 11.21 15.64 L 11.66 17.26" />
      <path d="M 16.71 13.61 L 17.83 15.00 L 18.55 15.22 L 17.18 16.63 L 19.15 18.21 L 19.74 17.38 L 20.27 18.66 L 22.17 21.46 L 23.00 19.57 L 20.75 17.11 L 18.89 15.46 L 18.12 14.51 L 19.17 13.50 L 21.69 13.39 L 23.00 11.00 L 20.42 9.55 L 21.45 7.44" />
      {children}
    </svg>
  );
});

export default ValicoNext;
