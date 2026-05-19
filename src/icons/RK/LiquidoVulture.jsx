import React from 'react';

export const iconData = {
  "id": "LiquidoVulture",
  "name": "LiquidoVulture",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.98 13.34 L 16.82 15.28 L 16.55 19.86 L 12.45 17.81 L 8.70 20.46 L 7.73 15.97 L 3.33 14.69 L 6.23 11.14 L 4.49 6.90 L 9.08 6.96 L 11.31 2.95 L 14.12 6.57 L 18.65 5.81 L 17.57 10.27 Z"
      }
    ]
  ]
};

export const LiquidoVulture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.98 13.34 L 16.82 15.28 L 16.55 19.86 L 12.45 17.81 L 8.70 20.46 L 7.73 15.97 L 3.33 14.69 L 6.23 11.14 L 4.49 6.90 L 9.08 6.96 L 11.31 2.95 L 14.12 6.57 L 18.65 5.81 L 17.57 10.27 Z" />
      {children}
    </svg>
  );
});

export default LiquidoVulture;
