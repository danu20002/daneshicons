import React from 'react';

export const iconData = {
  "id": "VogliaPelt",
  "name": "VogliaPelt",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.36 2.74 L 13.37 6.55 L 18.70 5.08 L 17.40 10.46 L 21.34 14.34 L 16.04 15.91 L 14.64 21.26 L 10.63 17.45 L 5.30 18.92 L 6.60 13.54 L 2.66 9.66 L 7.96 8.09 Z"
      }
    ]
  ]
};

export const VogliaPelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.36 2.74 L 13.37 6.55 L 18.70 5.08 L 17.40 10.46 L 21.34 14.34 L 16.04 15.91 L 14.64 21.26 L 10.63 17.45 L 5.30 18.92 L 6.60 13.54 L 2.66 9.66 L 7.96 8.09 Z" />
      {children}
    </svg>
  );
});

export default VogliaPelt;
