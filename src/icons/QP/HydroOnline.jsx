import React from 'react';

export const iconData = {
  "id": "HydroOnline",
  "name": "HydroOnline",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.43 3.24 L 19.74 7.65 L 20.23 15.34 L 14.52 20.52 L 6.91 19.28 L 3.14 12.56 L 6.04 5.42 Z"
      }
    ]
  ]
};

export const HydroOnline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.43 3.24 L 19.74 7.65 L 20.23 15.34 L 14.52 20.52 L 6.91 19.28 L 3.14 12.56 L 6.04 5.42 Z" />
      {children}
    </svg>
  );
});

export default HydroOnline;
