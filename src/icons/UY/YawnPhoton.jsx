import React from 'react';

export const iconData = {
  "id": "YawnPhoton",
  "name": "YawnPhoton",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.12 4.51 L 19.50 8.91 L 19.49 15.12 L 15.09 19.50 L 8.88 19.49 L 4.50 15.09 L 4.51 8.88 L 8.91 4.50 Z"
      }
    ]
  ]
};

export const YawnPhoton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.12 4.51 L 19.50 8.91 L 19.49 15.12 L 15.09 19.50 L 8.88 19.49 L 4.50 15.09 L 4.51 8.88 L 8.91 4.50 Z" />
      {children}
    </svg>
  );
});

export default YawnPhoton;
