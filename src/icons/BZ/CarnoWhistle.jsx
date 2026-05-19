import React from 'react';

export const iconData = {
  "id": "CarnoWhistle",
  "name": "CarnoWhistle",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.67 16.25 L 12.16 20.76 L 4.49 16.52 L 4.33 7.75 L 11.84 3.24 L 19.51 7.48 Z"
      }
    ]
  ]
};

export const CarnoWhistle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.67 16.25 L 12.16 20.76 L 4.49 16.52 L 4.33 7.75 L 11.84 3.24 L 19.51 7.48 Z" />
      {children}
    </svg>
  );
});

export default CarnoWhistle;
