import React from 'react';

export const iconData = {
  "id": "PicoPlum",
  "name": "PicoPlum",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.88 1.81 L 16.19 8.03 L 22.38 8.68 L 17.71 12.80 L 21.07 18.05 L 14.94 16.97 L 12.93 22.86 L 9.95 17.39 L 4.09 19.50 L 6.50 13.76 L 1.21 10.49 L 7.20 8.80 L 6.45 2.62 L 11.51 6.25 Z"
      }
    ]
  ]
};

export const PicoPlum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.88 1.81 L 16.19 8.03 L 22.38 8.68 L 17.71 12.80 L 21.07 18.05 L 14.94 16.97 L 12.93 22.86 L 9.95 17.39 L 4.09 19.50 L 6.50 13.76 L 1.21 10.49 L 7.20 8.80 L 6.45 2.62 L 11.51 6.25 Z" />
      {children}
    </svg>
  );
});

export default PicoPlum;
