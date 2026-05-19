import React from 'react';

export const iconData = {
  "id": "VersalePelt",
  "name": "VersalePelt",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.18 7.57 L 21.12 13.87 L 17.79 19.29 L 11.75 21.30 L 5.83 18.96 L 2.79 13.37 L 4.07 7.13 L 9.06 3.17 L 15.42 3.34 Z"
      }
    ]
  ]
};

export const VersalePelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.18 7.57 L 21.12 13.87 L 17.79 19.29 L 11.75 21.30 L 5.83 18.96 L 2.79 13.37 L 4.07 7.13 L 9.06 3.17 L 15.42 3.34 Z" />
      {children}
    </svg>
  );
});

export default VersalePelt;
