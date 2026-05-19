import React from 'react';

export const iconData = {
  "id": "PulmoWhole",
  "name": "PulmoWhole",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.19 1.18 L 13.25 8.83 L 19.96 4.62 L 15.26 11.00 L 22.73 13.62 L 14.82 13.92 L 17.42 21.40 L 12.25 15.40 L 8.03 22.10 L 9.50 14.32 L 1.63 15.20 L 8.63 11.49 L 3.04 5.88 L 10.30 9.05 Z"
      }
    ]
  ]
};

export const PulmoWhole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.19 1.18 L 13.25 8.83 L 19.96 4.62 L 15.26 11.00 L 22.73 13.62 L 14.82 13.92 L 17.42 21.40 L 12.25 15.40 L 8.03 22.10 L 9.50 14.32 L 1.63 15.20 L 8.63 11.49 L 3.04 5.88 L 10.30 9.05 Z" />
      {children}
    </svg>
  );
});

export default PulmoWhole;
