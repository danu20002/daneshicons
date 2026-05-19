import React from 'react';

export const iconData = {
  "id": "TensoOne",
  "name": "TensoOne",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.30 20.98 L 8.33 16.26 L 3.37 15.02 L 6.48 10.96 L 5.07 6.04 L 10.14 6.70 L 13.70 3.02 L 15.67 7.74 L 20.63 8.98 L 17.52 13.04 L 18.93 17.96 L 13.86 17.30 Z"
      }
    ]
  ]
};

export const TensoOne = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.30 20.98 L 8.33 16.26 L 3.37 15.02 L 6.48 10.96 L 5.07 6.04 L 10.14 6.70 L 13.70 3.02 L 15.67 7.74 L 20.63 8.98 L 17.52 13.04 L 18.93 17.96 L 13.86 17.30 Z" />
      {children}
    </svg>
  );
});

export default TensoOne;
