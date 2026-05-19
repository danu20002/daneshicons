import React from 'react';

export const iconData = {
  "id": "ValoreSane",
  "name": "ValoreSane",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.30 5.56 L 10.37 8.27 L 11.81 2.71 L 13.48 8.21 L 18.44 5.30 L 15.73 10.37 L 21.29 11.81 L 15.79 13.48 L 18.70 18.44 L 13.63 15.73 L 12.19 21.29 L 10.52 15.79 L 5.56 18.70 L 8.27 13.63 L 2.71 12.19 L 8.21 10.52 Z"
      }
    ]
  ]
};

export const ValoreSane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.30 5.56 L 10.37 8.27 L 11.81 2.71 L 13.48 8.21 L 18.44 5.30 L 15.73 10.37 L 21.29 11.81 L 15.79 13.48 L 18.70 18.44 L 13.63 15.73 L 12.19 21.29 L 10.52 15.79 L 5.56 18.70 L 8.27 13.63 L 2.71 12.19 L 8.21 10.52 Z" />
      {children}
    </svg>
  );
});

export default ValoreSane;
