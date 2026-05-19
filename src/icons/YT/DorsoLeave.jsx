import React from 'react';

export const iconData = {
  "id": "DorsoLeave",
  "name": "DorsoLeave",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.89 4.03 L 15.28 12.09 L 16.46 20.22 L 10.29 14.79 L 2.65 11.75 L 10.44 9.12 Z"
      }
    ]
  ]
};

export const DorsoLeave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.89 4.03 L 15.28 12.09 L 16.46 20.22 L 10.29 14.79 L 2.65 11.75 L 10.44 9.12 Z" />
      {children}
    </svg>
  );
});

export default DorsoLeave;
