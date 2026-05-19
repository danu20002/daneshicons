import React from 'react';

export const iconData = {
  "id": "SpiralPrincess",
  "name": "SpiralPrincess",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.34 2.33 L 18.53 4.67 L 21.80 12.54 L 17.69 20.00 L 9.30 21.43 L 2.94 15.77 L 3.40 7.27 Z"
      }
    ]
  ]
};

export const SpiralPrincess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.34 2.33 L 18.53 4.67 L 21.80 12.54 L 17.69 20.00 L 9.30 21.43 L 2.94 15.77 L 3.40 7.27 Z" />
      {children}
    </svg>
  );
});

export default SpiralPrincess;
