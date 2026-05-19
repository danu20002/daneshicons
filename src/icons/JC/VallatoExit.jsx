import React from 'react';

export const iconData = {
  "id": "VallatoExit",
  "name": "VallatoExit",
  "category": "JC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 7.11 L 2.54 5.92 L 3.45 6.59 L 4.32 6.79 L 2.77 8.82 L 1.92 6.67 L 1.00 6.37 L 1.05 6.95 L 1.68 4.67 L 1.00 5.74 L 2.83 5.12 L 3.22 2.40 L 1.68 3.54 L 1.00 5.03 L 1.94 3.00 L 3.46 1.92 L 5.15 2.40 L 6.94 1.00 L 9.73 2.79 L 11.58 4.89 L 12.93 5.72 L 15.24 2.89 L 17.14 5.77 L 15.46 8.59 L 13.71 9.93 L 14.47 7.30 L 14.29 5.82 L 16.55 5.02 L 17.33 3.08 L 17.79 1.00 L 20.00 1.00 L 20.07 1.00 L 18.86 1.00 L 19.04 1.91 L 20.55 2.69 L 20.20 3.65"
      }
    ]
  ]
};

export const VallatoExit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 7.11 L 2.54 5.92 L 3.45 6.59 L 4.32 6.79 L 2.77 8.82 L 1.92 6.67 L 1.00 6.37 L 1.05 6.95 L 1.68 4.67 L 1.00 5.74 L 2.83 5.12 L 3.22 2.40 L 1.68 3.54 L 1.00 5.03 L 1.94 3.00 L 3.46 1.92 L 5.15 2.40 L 6.94 1.00 L 9.73 2.79 L 11.58 4.89 L 12.93 5.72 L 15.24 2.89 L 17.14 5.77 L 15.46 8.59 L 13.71 9.93 L 14.47 7.30 L 14.29 5.82 L 16.55 5.02 L 17.33 3.08 L 17.79 1.00 L 20.00 1.00 L 20.07 1.00 L 18.86 1.00 L 19.04 1.91 L 20.55 2.69 L 20.20 3.65" />
      {children}
    </svg>
  );
});

export default VallatoExit;
