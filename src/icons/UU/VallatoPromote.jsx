import React from 'react';

export const iconData = {
  "id": "VallatoPromote",
  "name": "VallatoPromote",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 16.49 L 11.36 15.57 L 12.08 17.19 L 11.94 14.25 L 10.86 11.55 L 11.43 14.02 L 8.48 15.62 L 10.87 14.31 L 8.39 13.32 L 6.75 15.86 L 7.59 14.98 L 7.07 15.75 L 7.24 12.85 L 5.44 11.69 L 7.80 11.85 L 5.11 14.02 L 2.43 13.50 L 1.00 13.27 L 3.15 13.01 L 1.00 12.02 L 1.00 9.39"
      }
    ]
  ]
};

export const VallatoPromote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 16.49 L 11.36 15.57 L 12.08 17.19 L 11.94 14.25 L 10.86 11.55 L 11.43 14.02 L 8.48 15.62 L 10.87 14.31 L 8.39 13.32 L 6.75 15.86 L 7.59 14.98 L 7.07 15.75 L 7.24 12.85 L 5.44 11.69 L 7.80 11.85 L 5.11 14.02 L 2.43 13.50 L 1.00 13.27 L 3.15 13.01 L 1.00 12.02 L 1.00 9.39" />
      {children}
    </svg>
  );
});

export default VallatoPromote;
