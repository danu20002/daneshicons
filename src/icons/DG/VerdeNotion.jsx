import React from 'react';

export const iconData = {
  "id": "VerdeNotion",
  "name": "VerdeNotion",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.18 18.25 L 13.54 16.07 L 12.13 13.15 L 11.42 11.19 L 9.51 8.57 L 10.47 10.09 L 12.67 9.14 L 11.81 7.00 L 9.32 9.85 L 9.12 12.68 L 7.62 10.34 L 6.90 8.01 L 8.98 9.49 L 7.37 6.65 L 9.26 4.16 L 6.96 3.41 L 7.96 2.41 L 9.71 1.00 L 6.86 3.48"
      }
    ]
  ]
};

export const VerdeNotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.18 18.25 L 13.54 16.07 L 12.13 13.15 L 11.42 11.19 L 9.51 8.57 L 10.47 10.09 L 12.67 9.14 L 11.81 7.00 L 9.32 9.85 L 9.12 12.68 L 7.62 10.34 L 6.90 8.01 L 8.98 9.49 L 7.37 6.65 L 9.26 4.16 L 6.96 3.41 L 7.96 2.41 L 9.71 1.00 L 6.86 3.48" />
      {children}
    </svg>
  );
});

export default VerdeNotion;
