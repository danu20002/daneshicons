import React from 'react';

export const iconData = {
  "id": "VolutoCanopy",
  "name": "VolutoCanopy",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.97 20.48 L 12.02 15.55 L 7.14 20.54 L 8.93 13.80 L 2.17 12.06 L 8.91 10.24 L 7.03 3.52 L 11.98 8.45 L 16.86 3.46 L 15.07 10.20 L 21.83 11.94 L 15.09 13.76 Z"
      }
    ]
  ]
};

export const VolutoCanopy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.97 20.48 L 12.02 15.55 L 7.14 20.54 L 8.93 13.80 L 2.17 12.06 L 8.91 10.24 L 7.03 3.52 L 11.98 8.45 L 16.86 3.46 L 15.07 10.20 L 21.83 11.94 L 15.09 13.76 Z" />
      {children}
    </svg>
  );
});

export default VolutoCanopy;
