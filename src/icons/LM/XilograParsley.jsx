import React from 'react';

export const iconData = {
  "id": "XilograParsley",
  "name": "XilograParsley",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.14 5.23 L 16.93 5.29 L 19.91 14.62 L 11.95 20.33 L 4.06 14.53 Z"
      }
    ]
  ]
};

export const XilograParsley = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.14 5.23 L 16.93 5.29 L 19.91 14.62 L 11.95 20.33 L 4.06 14.53 Z" />
      {children}
    </svg>
  );
});

export default XilograParsley;
