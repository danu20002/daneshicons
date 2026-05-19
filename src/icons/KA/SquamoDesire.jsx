import React from 'react';

export const iconData = {
  "id": "SquamoDesire",
  "name": "SquamoDesire",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.51 21.66 L 2.87 8.48 L 19.61 5.86 Z"
      }
    ]
  ]
};

export const SquamoDesire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.51 21.66 L 2.87 8.48 L 19.61 5.86 Z" />
      {children}
    </svg>
  );
});

export default SquamoDesire;
