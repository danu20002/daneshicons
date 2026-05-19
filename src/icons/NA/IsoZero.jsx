import React from 'react';

export const iconData = {
  "id": "IsoZero",
  "name": "IsoZero",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.84 8.61 L 8.79 7.18 L 12.40 2.24 L 15.59 7.46 L 21.40 9.36 L 17.43 14.01 L 17.42 20.13 L 11.77 17.78 L 5.94 19.66 L 6.43 13.56 Z"
      }
    ]
  ]
};

export const IsoZero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.84 8.61 L 8.79 7.18 L 12.40 2.24 L 15.59 7.46 L 21.40 9.36 L 17.43 14.01 L 17.42 20.13 L 11.77 17.78 L 5.94 19.66 L 6.43 13.56 Z" />
      {children}
    </svg>
  );
});

export default IsoZero;
