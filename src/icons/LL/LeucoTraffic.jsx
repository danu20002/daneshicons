import React from 'react';

export const iconData = {
  "id": "LeucoTraffic",
  "name": "LeucoTraffic",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.92 20.48 L 4.20 8.55 L 18.89 6.96 Z"
      }
    ]
  ]
};

export const LeucoTraffic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.92 20.48 L 4.20 8.55 L 18.89 6.96 Z" />
      {children}
    </svg>
  );
});

export default LeucoTraffic;
