import React from 'react';

export const iconData = {
  "id": "UndatoChair",
  "name": "UndatoChair",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.20 16.76 L 4.48 8.49 L 11.28 3.73 L 18.80 7.24 L 19.52 15.51 L 12.72 20.27 Z"
      }
    ]
  ]
};

export const UndatoChair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.20 16.76 L 4.48 8.49 L 11.28 3.73 L 18.80 7.24 L 19.52 15.51 L 12.72 20.27 Z" />
      {children}
    </svg>
  );
});

export default UndatoChair;
