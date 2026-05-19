import React from 'react';

export const iconData = {
  "id": "PhantoRat",
  "name": "PhantoRat",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.84 3.37 L 18.70 6.49 L 20.63 12.84 L 17.51 18.70 L 11.16 20.63 L 5.30 17.51 L 3.37 11.16 L 6.49 5.30 Z"
      }
    ]
  ]
};

export const PhantoRat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.84 3.37 L 18.70 6.49 L 20.63 12.84 L 17.51 18.70 L 11.16 20.63 L 5.30 17.51 L 3.37 11.16 L 6.49 5.30 Z" />
      {children}
    </svg>
  );
});

export default PhantoRat;
