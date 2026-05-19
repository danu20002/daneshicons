import React from 'react';

export const iconData = {
  "id": "NebuloFunny",
  "name": "NebuloFunny",
  "category": "PL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.72 L 2.50 8.82 L 3.00 9.80 L 3.50 10.59 L 4.00 11.09 L 4.50 11.26 L 5.00 11.09 L 5.50 10.59 L 6.00 9.80 L 6.50 8.82 L 7.00 7.72 L 7.50 6.63 L 8.00 5.64 L 8.50 4.85 L 9.00 4.35 L 9.50 4.18 L 10.00 4.35 L 10.50 4.85 L 11.00 5.64 L 11.50 6.63 L 12.00 7.72 L 12.50 8.82 L 13.00 9.80 L 13.50 10.59 L 14.00 11.09 L 14.50 11.26 L 15.00 11.09 L 15.50 10.59 L 16.00 9.80 L 16.50 8.82 L 17.00 7.72 L 17.50 6.63 L 18.00 5.64 L 18.50 4.85 L 19.00 4.35 L 19.50 4.18 L 20.00 4.35 L 20.50 4.85 L 21.00 5.64 L 21.50 6.63 L 22.00 7.72"
      }
    ]
  ]
};

export const NebuloFunny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.72 L 2.50 8.82 L 3.00 9.80 L 3.50 10.59 L 4.00 11.09 L 4.50 11.26 L 5.00 11.09 L 5.50 10.59 L 6.00 9.80 L 6.50 8.82 L 7.00 7.72 L 7.50 6.63 L 8.00 5.64 L 8.50 4.85 L 9.00 4.35 L 9.50 4.18 L 10.00 4.35 L 10.50 4.85 L 11.00 5.64 L 11.50 6.63 L 12.00 7.72 L 12.50 8.82 L 13.00 9.80 L 13.50 10.59 L 14.00 11.09 L 14.50 11.26 L 15.00 11.09 L 15.50 10.59 L 16.00 9.80 L 16.50 8.82 L 17.00 7.72 L 17.50 6.63 L 18.00 5.64 L 18.50 4.85 L 19.00 4.35 L 19.50 4.18 L 20.00 4.35 L 20.50 4.85 L 21.00 5.64 L 21.50 6.63 L 22.00 7.72" />
      {children}
    </svg>
  );
});

export default NebuloFunny;
