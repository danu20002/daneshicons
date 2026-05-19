import React from 'react';

export const iconData = {
  "id": "SquamoIodine",
  "name": "SquamoIodine",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.97 17.48 L 11.24 21.64 L 3.27 16.16 L 4.03 6.52 L 12.76 2.36 L 20.73 7.84 Z"
      }
    ]
  ]
};

export const SquamoIodine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.97 17.48 L 11.24 21.64 L 3.27 16.16 L 4.03 6.52 L 12.76 2.36 L 20.73 7.84 Z" />
      {children}
    </svg>
  );
});

export default SquamoIodine;
