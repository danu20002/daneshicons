import React from 'react';

export const iconData = {
  "id": "VerduraPeace",
  "name": "VerduraPeace",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.51 2.13 L 15.13 8.90 L 21.91 8.59 L 16.37 12.52 L 20.85 17.62 L 14.32 15.74 L 13.12 22.42 L 10.52 16.15 L 4.55 19.37 L 7.84 13.43 L 1.59 10.77 L 8.28 9.64 L 6.47 3.10 L 11.53 7.62 Z"
      }
    ]
  ]
};

export const VerduraPeace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.51 2.13 L 15.13 8.90 L 21.91 8.59 L 16.37 12.52 L 20.85 17.62 L 14.32 15.74 L 13.12 22.42 L 10.52 16.15 L 4.55 19.37 L 7.84 13.43 L 1.59 10.77 L 8.28 9.64 L 6.47 3.10 L 11.53 7.62 Z" />
      {children}
    </svg>
  );
});

export default VerduraPeace;
