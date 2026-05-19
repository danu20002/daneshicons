import React from 'react';

export const iconData = {
  "id": "XoloCarnival",
  "name": "XoloCarnival",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.75 20.37 L 6.88 4.14 L 21.37 11.50 Z"
      }
    ]
  ]
};

export const XoloCarnival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.75 20.37 L 6.88 4.14 L 21.37 11.50 Z" />
      {children}
    </svg>
  );
});

export default XoloCarnival;
