import React from 'react';

export const iconData = {
  "id": "GlucoWedding",
  "name": "GlucoWedding",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.80 5.01 L 16.84 11.50 L 21.06 17.26 L 13.97 16.44 L 9.80 22.24 L 8.38 15.24 L 1.58 13.07 L 7.80 9.56 L 7.76 2.42 L 13.02 7.25 Z"
      }
    ]
  ]
};

export const GlucoWedding = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.80 5.01 L 16.84 11.50 L 21.06 17.26 L 13.97 16.44 L 9.80 22.24 L 8.38 15.24 L 1.58 13.07 L 7.80 9.56 L 7.76 2.42 L 13.02 7.25 Z" />
      {children}
    </svg>
  );
});

export default GlucoWedding;
