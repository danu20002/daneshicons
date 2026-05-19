import React from 'react';

export const iconData = {
  "id": "PolarisPortrait",
  "name": "PolarisPortrait",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.61 15.98 L 12.84 17.78 L 12.97 19.38 L 11.09 18.24 L 13.62 20.03 L 15.93 19.43 L 18.33 21.62 L 19.85 23.00 L 20.25 23.00 L 17.33 23.00 L 18.66 21.48 L 19.10 23.00 L 17.44 23.00 L 18.52 23.00 L 21.35 23.00 L 18.96 23.00 L 20.92 23.00 L 23.00 22.11 L 22.87 23.00 L 23.00 23.00 L 23.00 21.35 L 22.79 20.00 L 20.15 20.85 L 20.78 17.90 L 20.92 18.91 L 21.77 18.28"
      }
    ]
  ]
};

export const PolarisPortrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.61 15.98 L 12.84 17.78 L 12.97 19.38 L 11.09 18.24 L 13.62 20.03 L 15.93 19.43 L 18.33 21.62 L 19.85 23.00 L 20.25 23.00 L 17.33 23.00 L 18.66 21.48 L 19.10 23.00 L 17.44 23.00 L 18.52 23.00 L 21.35 23.00 L 18.96 23.00 L 20.92 23.00 L 23.00 22.11 L 22.87 23.00 L 23.00 23.00 L 23.00 21.35 L 22.79 20.00 L 20.15 20.85 L 20.78 17.90 L 20.92 18.91 L 21.77 18.28" />
      {children}
    </svg>
  );
});

export default PolarisPortrait;
