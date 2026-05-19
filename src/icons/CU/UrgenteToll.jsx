import React from 'react';

export const iconData = {
  "id": "UrgenteToll",
  "name": "UrgenteToll",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.92 14.34 L 13.92 14.34 L 12.53 21.21 L 10.37 14.55 L 3.41 15.35 L 9.07 11.23 L 6.16 4.86 L 11.83 8.98 L 16.98 4.24 L 14.82 10.90 Z"
      }
    ]
  ]
};

export const UrgenteToll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.92 14.34 L 13.92 14.34 L 12.53 21.21 L 10.37 14.55 L 3.41 15.35 L 9.07 11.23 L 6.16 4.86 L 11.83 8.98 L 16.98 4.24 L 14.82 10.90 Z" />
      {children}
    </svg>
  );
});

export default UrgenteToll;
