import React from 'react';

export const iconData = {
  "id": "PomoLace",
  "name": "PomoLace",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.18 19.38 L 12.80 17.54 L 7.20 21.11 L 6.98 14.47 L 1.85 10.25 L 8.10 7.99 L 10.53 1.81 L 14.61 7.05 L 21.24 7.45 L 17.51 12.95 Z"
      }
    ]
  ]
};

export const PomoLace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.18 19.38 L 12.80 17.54 L 7.20 21.11 L 6.98 14.47 L 1.85 10.25 L 8.10 7.99 L 10.53 1.81 L 14.61 7.05 L 21.24 7.45 L 17.51 12.95 Z" />
      {children}
    </svg>
  );
});

export default PomoLace;
