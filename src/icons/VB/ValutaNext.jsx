import React from 'react';

export const iconData = {
  "id": "ValutaNext",
  "name": "ValutaNext",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 18.80 L 6.77 13.87 L 1.88 11.49 L 6.98 9.62 L 5.20 4.48 L 10.13 6.77 L 12.51 1.88 L 14.38 6.98 L 19.52 5.20 L 17.23 10.13 L 22.12 12.51 L 17.02 14.38 L 18.80 19.52 L 13.87 17.23 L 11.49 22.12 L 9.62 17.02 Z"
      }
    ]
  ]
};

export const ValutaNext = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 18.80 L 6.77 13.87 L 1.88 11.49 L 6.98 9.62 L 5.20 4.48 L 10.13 6.77 L 12.51 1.88 L 14.38 6.98 L 19.52 5.20 L 17.23 10.13 L 22.12 12.51 L 17.02 14.38 L 18.80 19.52 L 13.87 17.23 L 11.49 22.12 L 9.62 17.02 Z" />
      {children}
    </svg>
  );
});

export default ValutaNext;
