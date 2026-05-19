import React from 'react';

export const iconData = {
  "id": "DilithioLane",
  "name": "DilithioLane",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.67 8.82 L 15.43 15.06 L 9.92 21.96 L 7.63 13.44 L 4.41 5.22 L 12.94 7.50 Z"
      }
    ]
  ]
};

export const DilithioLane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.67 8.82 L 15.43 15.06 L 9.92 21.96 L 7.63 13.44 L 4.41 5.22 L 12.94 7.50 Z" />
      {children}
    </svg>
  );
});

export default DilithioLane;
