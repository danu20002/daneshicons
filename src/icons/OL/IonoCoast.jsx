import React from 'react';

export const iconData = {
  "id": "IonoCoast",
  "name": "IonoCoast",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.60 2.92 L 18.22 5.24 L 21.16 12.65 L 17.20 19.57 L 9.32 20.79 L 3.46 15.39 L 4.03 7.44 Z"
      }
    ]
  ]
};

export const IonoCoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.60 2.92 L 18.22 5.24 L 21.16 12.65 L 17.20 19.57 L 9.32 20.79 L 3.46 15.39 L 4.03 7.44 Z" />
      {children}
    </svg>
  );
});

export default IonoCoast;
