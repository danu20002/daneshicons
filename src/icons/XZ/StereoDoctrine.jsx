import React from 'react';

export const iconData = {
  "id": "StereoDoctrine",
  "name": "StereoDoctrine",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.32 22.49 L 9.49 15.09 L 2.07 15.79 L 8.06 11.37 L 3.75 5.30 L 10.58 8.28 L 13.68 1.51 L 14.51 8.91 L 21.93 8.21 L 15.94 12.63 L 20.25 18.70 L 13.42 15.72 Z"
      }
    ]
  ]
};

export const StereoDoctrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.32 22.49 L 9.49 15.09 L 2.07 15.79 L 8.06 11.37 L 3.75 5.30 L 10.58 8.28 L 13.68 1.51 L 14.51 8.91 L 21.93 8.21 L 15.94 12.63 L 20.25 18.70 L 13.42 15.72 Z" />
      {children}
    </svg>
  );
});

export default StereoDoctrine;
