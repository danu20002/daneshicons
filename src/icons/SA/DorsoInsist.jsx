import React from 'react';

export const iconData = {
  "id": "DorsoInsist",
  "name": "DorsoInsist",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.39 15.76 L 14.57 19.89 L 8.24 19.39 L 4.11 14.57 L 4.61 8.24 L 9.43 4.11 L 15.76 4.61 L 19.89 9.43 Z"
      }
    ]
  ]
};

export const DorsoInsist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.39 15.76 L 14.57 19.89 L 8.24 19.39 L 4.11 14.57 L 4.61 8.24 L 9.43 4.11 L 15.76 4.61 L 19.89 9.43 Z" />
      {children}
    </svg>
  );
});

export default DorsoInsist;
