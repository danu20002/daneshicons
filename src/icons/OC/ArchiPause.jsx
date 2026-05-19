import React from 'react';

export const iconData = {
  "id": "ArchiPause",
  "name": "ArchiPause",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.25 10.10 L 8.58 2.40 L 4.94 4.32 L 10.36 13.58 L 5.75 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 2.98 L 19.03 2.78"
      }
    ]
  ]
};

export const ArchiPause = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.25 10.10 L 8.58 2.40 L 4.94 4.32 L 10.36 13.58 L 5.75 17.71" />
      <path d="M 3.20 2.98 L 19.03 2.78" />
      {children}
    </svg>
  );
});

export default ArchiPause;
