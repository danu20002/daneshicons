import React from 'react';

export const iconData = {
  "id": "VeneroTruly",
  "name": "VeneroTruly",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.89 9.05 L 6.92 3.89 L 13.32 2.52 L 19.11 5.59 L 21.57 11.66 L 19.55 17.89 L 14.00 21.36 L 7.51 20.46 L 3.13 15.59 Z"
      }
    ]
  ]
};

export const VeneroTruly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.89 9.05 L 6.92 3.89 L 13.32 2.52 L 19.11 5.59 L 21.57 11.66 L 19.55 17.89 L 14.00 21.36 L 7.51 20.46 L 3.13 15.59 Z" />
      {children}
    </svg>
  );
});

export default VeneroTruly;
