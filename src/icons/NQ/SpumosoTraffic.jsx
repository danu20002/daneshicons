import React from 'react';

export const iconData = {
  "id": "SpumosoTraffic",
  "name": "SpumosoTraffic",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.88 3.49 L 20.99 12.11 L 14.67 20.58 L 4.67 17.20 L 4.79 6.63 Z"
      }
    ]
  ]
};

export const SpumosoTraffic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.88 3.49 L 20.99 12.11 L 14.67 20.58 L 4.67 17.20 L 4.79 6.63 Z" />
      {children}
    </svg>
  );
});

export default SpumosoTraffic;
