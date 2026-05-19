import React from 'react';

export const iconData = {
  "id": "SucroMonday",
  "name": "SucroMonday",
  "category": "HQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.04 3.95 L 11.53 1.30 L 10.52 1.00 L 13.39 1.00 L 12.27 2.28 L 13.06 1.00 L 13.71 3.86 L 12.01 4.83 L 13.81 6.01 L 13.52 6.15 L 11.83 9.09 L 12.39 6.88 L 13.38 6.24 L 13.55 3.55 L 12.31 6.41 L 10.70 6.42 L 8.75 8.08 L 7.76 10.17 L 9.24 8.61 L 8.91 8.02 L 11.80 7.94 L 10.81 9.02 L 13.52 11.79 L 11.47 11.52 L 9.15 10.29"
      }
    ]
  ]
};

export const SucroMonday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.04 3.95 L 11.53 1.30 L 10.52 1.00 L 13.39 1.00 L 12.27 2.28 L 13.06 1.00 L 13.71 3.86 L 12.01 4.83 L 13.81 6.01 L 13.52 6.15 L 11.83 9.09 L 12.39 6.88 L 13.38 6.24 L 13.55 3.55 L 12.31 6.41 L 10.70 6.42 L 8.75 8.08 L 7.76 10.17 L 9.24 8.61 L 8.91 8.02 L 11.80 7.94 L 10.81 9.02 L 13.52 11.79 L 11.47 11.52 L 9.15 10.29" />
      {children}
    </svg>
  );
});

export default SucroMonday;
