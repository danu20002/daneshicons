import React from 'react';

export const iconData = {
  "id": "PiezoProtein",
  "name": "PiezoProtein",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.16 18.29 L 12.61 21.51 L 5.71 19.16 L 2.49 12.61 L 4.84 5.71 L 11.39 2.49 L 18.29 4.84 L 21.51 11.39 Z"
      }
    ]
  ]
};

export const PiezoProtein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.16 18.29 L 12.61 21.51 L 5.71 19.16 L 2.49 12.61 L 4.84 5.71 L 11.39 2.49 L 18.29 4.84 L 21.51 11.39 Z" />
      {children}
    </svg>
  );
});

export default PiezoProtein;
