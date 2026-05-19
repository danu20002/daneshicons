import React from 'react';

export const iconData = {
  "id": "OmniDensity",
  "name": "OmniDensity",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.49 22.67 L 10.49 14.78 L 3.33 18.25 L 8.88 12.56 L 1.71 9.12 L 9.62 9.91 L 7.83 2.16 L 12.15 8.84 L 17.09 2.61 L 14.57 10.15 L 22.52 10.13 L 15.05 12.85 L 20.02 19.06 L 13.24 14.92 Z"
      }
    ]
  ]
};

export const OmniDensity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.49 22.67 L 10.49 14.78 L 3.33 18.25 L 8.88 12.56 L 1.71 9.12 L 9.62 9.91 L 7.83 2.16 L 12.15 8.84 L 17.09 2.61 L 14.57 10.15 L 22.52 10.13 L 15.05 12.85 L 20.02 19.06 L 13.24 14.92 Z" />
      {children}
    </svg>
  );
});

export default OmniDensity;
