import React from 'react';

export const iconData = {
  "id": "RetroFlash",
  "name": "RetroFlash",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 19.31 L 3.03 21.97 L 3.19 20.13 L 5.42 19.07 L 7.52 20.57 L 10.46 23.00 L 8.20 23.00 L 8.63 23.00 L 9.06 23.00 L 6.15 20.94 L 3.36 19.65 L 1.16 18.50 L 1.00 18.85 L 1.00 19.92 L 1.00 21.49 L 1.00 20.99 L 2.30 23.00 L 3.29 20.30 L 4.91 20.71 L 2.63 17.76 L 1.18 19.95 L 2.96 20.52 L 1.00 22.53 L 2.73 21.96 L 3.39 23.00 L 4.07 23.00"
      }
    ]
  ]
};

export const RetroFlash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 19.31 L 3.03 21.97 L 3.19 20.13 L 5.42 19.07 L 7.52 20.57 L 10.46 23.00 L 8.20 23.00 L 8.63 23.00 L 9.06 23.00 L 6.15 20.94 L 3.36 19.65 L 1.16 18.50 L 1.00 18.85 L 1.00 19.92 L 1.00 21.49 L 1.00 20.99 L 2.30 23.00 L 3.29 20.30 L 4.91 20.71 L 2.63 17.76 L 1.18 19.95 L 2.96 20.52 L 1.00 22.53 L 2.73 21.96 L 3.39 23.00 L 4.07 23.00" />
      {children}
    </svg>
  );
});

export default RetroFlash;
