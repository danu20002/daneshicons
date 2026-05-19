import React from 'react';

export const iconData = {
  "id": "VegetoPeel",
  "name": "VegetoPeel",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.71 20.37 L 7.71 13.83 L 1.61 10.74 L 8.27 9.20 L 7.89 2.37 L 12.56 7.37 L 18.29 3.63 L 16.29 10.17 L 22.39 13.26 L 15.73 14.80 L 16.11 21.63 L 11.44 16.63 Z"
      }
    ]
  ]
};

export const VegetoPeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.71 20.37 L 7.71 13.83 L 1.61 10.74 L 8.27 9.20 L 7.89 2.37 L 12.56 7.37 L 18.29 3.63 L 16.29 10.17 L 22.39 13.26 L 15.73 14.80 L 16.11 21.63 L 11.44 16.63 Z" />
      {children}
    </svg>
  );
});

export default VegetoPeel;
