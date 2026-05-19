import React from 'react';

export const iconData = {
  "id": "BrunoPlague",
  "name": "BrunoPlague",
  "category": "LH",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.74 18.83 L 11.98 19.07 L 12.62 19.57 L 9.70 21.20 L 12.26 22.33 L 14.71 21.19 L 15.40 22.10 L 17.70 22.71 L 16.27 23.00 L 15.06 23.00 L 15.80 21.07 L 18.20 19.23 L 19.13 18.53 L 19.50 17.91 L 21.47 16.72 L 23.00 17.71 L 23.00 15.96"
      }
    ]
  ]
};

export const BrunoPlague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.74 18.83 L 11.98 19.07 L 12.62 19.57 L 9.70 21.20 L 12.26 22.33 L 14.71 21.19 L 15.40 22.10 L 17.70 22.71 L 16.27 23.00 L 15.06 23.00 L 15.80 21.07 L 18.20 19.23 L 19.13 18.53 L 19.50 17.91 L 21.47 16.72 L 23.00 17.71 L 23.00 15.96" />
      {children}
    </svg>
  );
});

export default BrunoPlague;
