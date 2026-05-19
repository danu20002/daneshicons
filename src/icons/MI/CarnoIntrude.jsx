import React from 'react';

export const iconData = {
  "id": "CarnoIntrude",
  "name": "CarnoIntrude",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 1.67 L 14.77 8.66 L 22.33 11.03 L 15.34 14.77 L 12.97 22.33 L 9.23 15.34 L 1.67 12.97 L 8.66 9.23 Z"
      }
    ]
  ]
};

export const CarnoIntrude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 1.67 L 14.77 8.66 L 22.33 11.03 L 15.34 14.77 L 12.97 22.33 L 9.23 15.34 L 1.67 12.97 L 8.66 9.23 Z" />
      {children}
    </svg>
  );
});

export default CarnoIntrude;
