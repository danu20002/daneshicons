import React from 'react';

export const iconData = {
  "id": "VeronicaSize",
  "name": "VeronicaSize",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.70 2.41 L 17.94 4.46 L 21.40 10.04 L 20.46 16.54 L 15.56 20.91 L 9.00 21.12 L 3.84 17.05 L 2.50 10.63 L 5.61 4.84 Z"
      }
    ]
  ]
};

export const VeronicaSize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.70 2.41 L 17.94 4.46 L 21.40 10.04 L 20.46 16.54 L 15.56 20.91 L 9.00 21.12 L 3.84 17.05 L 2.50 10.63 L 5.61 4.84 Z" />
      {children}
    </svg>
  );
});

export default VeronicaSize;
