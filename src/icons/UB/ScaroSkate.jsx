import React from 'react';

export const iconData = {
  "id": "ScaroSkate",
  "name": "ScaroSkate",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.05 14.27 L 12.41 15.12 L 9.54 17.96 L 10.45 19.85 L 13.31 16.88 L 14.68 18.48 L 15.21 17.74 L 12.27 16.84 L 14.51 19.04 L 12.57 17.94 L 13.08 16.69 L 16.03 17.68 L 15.76 19.43 L 17.02 16.94 L 15.39 18.26 L 16.90 19.27 L 16.14 17.53 L 18.85 18.21 L 19.00 19.21 L 21.20 20.24 L 18.35 21.83 L 19.10 23.00 L 20.28 23.00 L 22.27 23.00 L 21.48 23.00 L 19.15 20.30 L 19.77 20.10 L 18.01 22.54"
      }
    ]
  ]
};

export const ScaroSkate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.05 14.27 L 12.41 15.12 L 9.54 17.96 L 10.45 19.85 L 13.31 16.88 L 14.68 18.48 L 15.21 17.74 L 12.27 16.84 L 14.51 19.04 L 12.57 17.94 L 13.08 16.69 L 16.03 17.68 L 15.76 19.43 L 17.02 16.94 L 15.39 18.26 L 16.90 19.27 L 16.14 17.53 L 18.85 18.21 L 19.00 19.21 L 21.20 20.24 L 18.35 21.83 L 19.10 23.00 L 20.28 23.00 L 22.27 23.00 L 21.48 23.00 L 19.15 20.30 L 19.77 20.10 L 18.01 22.54" />
      {children}
    </svg>
  );
});

export default ScaroSkate;
