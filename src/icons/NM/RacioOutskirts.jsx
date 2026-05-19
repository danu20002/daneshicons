import React from 'react';

export const iconData = {
  "id": "RacioOutskirts",
  "name": "RacioOutskirts",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.67 14.79 L 10.40 12.25 L 8.96 14.61 L 8.05 16.41 L 6.62 15.97 L 5.87 15.92 L 6.83 15.21 L 5.27 18.19 L 5.38 15.30 L 3.07 12.74 L 1.00 13.94 L 1.00 15.69 L 1.00 13.70 L 3.01 16.41 L 3.02 14.21 L 5.86 13.92 L 6.71 12.59 L 3.79 10.82 L 5.53 11.91 L 3.21 10.77 L 3.10 13.51 L 6.01 15.48"
      }
    ]
  ]
};

export const RacioOutskirts = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.67 14.79 L 10.40 12.25 L 8.96 14.61 L 8.05 16.41 L 6.62 15.97 L 5.87 15.92 L 6.83 15.21 L 5.27 18.19 L 5.38 15.30 L 3.07 12.74 L 1.00 13.94 L 1.00 15.69 L 1.00 13.70 L 3.01 16.41 L 3.02 14.21 L 5.86 13.92 L 6.71 12.59 L 3.79 10.82 L 5.53 11.91 L 3.21 10.77 L 3.10 13.51 L 6.01 15.48" />
      {children}
    </svg>
  );
});

export default RacioOutskirts;
