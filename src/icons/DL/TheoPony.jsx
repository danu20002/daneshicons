import React from 'react';

export const iconData = {
  "id": "TheoPony",
  "name": "TheoPony",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.34 19.27 L 4.73 6.34 L 17.66 4.73 L 19.27 17.66 Z"
      }
    ]
  ]
};

export const TheoPony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.34 19.27 L 4.73 6.34 L 17.66 4.73 L 19.27 17.66 Z" />
      {children}
    </svg>
  );
});

export default TheoPony;
