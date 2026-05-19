import React from 'react';

export const iconData = {
  "id": "LiquidoSturdy",
  "name": "LiquidoSturdy",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 18.19 L 8.86 19.69 L 9.30 18.29 L 10.57 17.44 L 10.02 18.27 L 7.23 17.84 L 9.68 18.01 L 7.08 19.21 L 6.86 18.62 L 9.32 18.52 L 7.05 19.08 L 7.61 17.74 L 7.94 17.51 L 10.02 16.29 L 12.28 18.98 L 9.65 16.70 L 9.09 14.73 L 7.53 15.02 L 8.78 14.92"
      }
    ]
  ]
};

export const LiquidoSturdy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 18.19 L 8.86 19.69 L 9.30 18.29 L 10.57 17.44 L 10.02 18.27 L 7.23 17.84 L 9.68 18.01 L 7.08 19.21 L 6.86 18.62 L 9.32 18.52 L 7.05 19.08 L 7.61 17.74 L 7.94 17.51 L 10.02 16.29 L 12.28 18.98 L 9.65 16.70 L 9.09 14.73 L 7.53 15.02 L 8.78 14.92" />
      {children}
    </svg>
  );
});

export default LiquidoSturdy;
