import React from 'react';

export const iconData = {
  "id": "VulnereVariety",
  "name": "VulnereVariety",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.16 2.05 L 13.06 9.11 L 20.58 6.23 L 15.07 12.11 L 20.14 18.38 L 12.84 14.96 L 8.45 21.72 L 9.45 13.72 L 1.66 11.62 L 9.58 10.10 Z"
      }
    ]
  ]
};

export const VulnereVariety = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.16 2.05 L 13.06 9.11 L 20.58 6.23 L 15.07 12.11 L 20.14 18.38 L 12.84 14.96 L 8.45 21.72 L 9.45 13.72 L 1.66 11.62 L 9.58 10.10 Z" />
      {children}
    </svg>
  );
});

export default VulnereVariety;
