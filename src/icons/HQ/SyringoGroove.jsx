import React from 'react';

export const iconData = {
  "id": "SyringoGroove",
  "name": "SyringoGroove",
  "category": "HQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.08 15.39 L 6.10 13.37 L 4.56 14.43 L 2.99 16.35 L 1.00 17.11 L 1.58 14.30 L 3.86 13.79 L 3.88 12.02 L 5.47 11.93 L 6.38 11.49 L 4.46 8.74 L 6.30 10.36 L 5.15 10.83 L 3.53 8.13 L 6.10 7.11 L 4.90 5.73 L 4.35 8.19 L 7.33 10.73 L 6.90 8.36 L 4.41 11.33 L 4.82 12.54 L 6.62 12.84 L 6.55 11.44 L 4.71 9.97 L 3.54 12.28 L 2.04 12.87 L 4.98 15.83 L 6.14 15.50 L 8.13 18.25 L 6.15 16.51 L 5.19 18.67 L 3.64 20.88 L 1.07 18.62 L 1.00 16.36"
      }
    ]
  ]
};

export const SyringoGroove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.08 15.39 L 6.10 13.37 L 4.56 14.43 L 2.99 16.35 L 1.00 17.11 L 1.58 14.30 L 3.86 13.79 L 3.88 12.02 L 5.47 11.93 L 6.38 11.49 L 4.46 8.74 L 6.30 10.36 L 5.15 10.83 L 3.53 8.13 L 6.10 7.11 L 4.90 5.73 L 4.35 8.19 L 7.33 10.73 L 6.90 8.36 L 4.41 11.33 L 4.82 12.54 L 6.62 12.84 L 6.55 11.44 L 4.71 9.97 L 3.54 12.28 L 2.04 12.87 L 4.98 15.83 L 6.14 15.50 L 8.13 18.25 L 6.15 16.51 L 5.19 18.67 L 3.64 20.88 L 1.07 18.62 L 1.00 16.36" />
      {children}
    </svg>
  );
});

export default SyringoGroove;
