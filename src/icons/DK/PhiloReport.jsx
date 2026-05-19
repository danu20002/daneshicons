import React from 'react';

export const iconData = {
  "id": "PhiloReport",
  "name": "PhiloReport",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.84 10.35 L 17.35 17.96 L 9.51 19.62 L 4.16 13.65 L 6.65 6.04 L 14.49 4.38 Z"
      }
    ]
  ]
};

export const PhiloReport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.84 10.35 L 17.35 17.96 L 9.51 19.62 L 4.16 13.65 L 6.65 6.04 L 14.49 4.38 Z" />
      {children}
    </svg>
  );
});

export default PhiloReport;
