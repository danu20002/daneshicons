import React from 'react';

export const iconData = {
  "id": "XerograJolt",
  "name": "XerograJolt",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.04 5.72 L 16.04 13.63 L 13.42 22.10 L 8.57 14.68 L 2.54 8.18 L 11.39 7.69 Z"
      }
    ]
  ]
};

export const XerograJolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.04 5.72 L 16.04 13.63 L 13.42 22.10 L 8.57 14.68 L 2.54 8.18 L 11.39 7.69 Z" />
      {children}
    </svg>
  );
});

export default XerograJolt;
