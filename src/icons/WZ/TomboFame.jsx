import React from 'react';

export const iconData = {
  "id": "TomboFame",
  "name": "TomboFame",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.43 19.27 L 7.27 16.57 L 7.79 17.05 L 8.63 15.80 L 7.82 17.08 L 5.81 17.35 L 3.66 14.92 L 1.63 15.35 L 1.00 17.39 L 2.29 14.73 L 5.16 12.28 L 2.32 14.45 L 1.00 13.42 L 1.00 16.02 L 2.23 18.51 L 3.04 20.24 L 1.17 20.36 L 1.33 21.91 L 1.00 20.91 L 2.71 21.74 L 3.90 23.00"
      }
    ]
  ]
};

export const TomboFame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.43 19.27 L 7.27 16.57 L 7.79 17.05 L 8.63 15.80 L 7.82 17.08 L 5.81 17.35 L 3.66 14.92 L 1.63 15.35 L 1.00 17.39 L 2.29 14.73 L 5.16 12.28 L 2.32 14.45 L 1.00 13.42 L 1.00 16.02 L 2.23 18.51 L 3.04 20.24 L 1.17 20.36 L 1.33 21.91 L 1.00 20.91 L 2.71 21.74 L 3.90 23.00" />
      {children}
    </svg>
  );
});

export default TomboFame;
