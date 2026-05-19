import React from 'react';

export const iconData = {
  "id": "XantoDrive",
  "name": "XantoDrive",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.75 17.93 L 10.24 20.81 L 3.50 14.88 L 5.25 6.07 L 13.76 3.19 L 20.50 9.12 Z"
      }
    ]
  ]
};

export const XantoDrive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.75 17.93 L 10.24 20.81 L 3.50 14.88 L 5.25 6.07 L 13.76 3.19 L 20.50 9.12 Z" />
      {children}
    </svg>
  );
});

export default XantoDrive;
