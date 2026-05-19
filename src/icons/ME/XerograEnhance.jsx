import React from 'react';

export const iconData = {
  "id": "XerograEnhance",
  "name": "XerograEnhance",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.40 4.04 L 18.09 6.64 L 19.69 14.60 L 13.60 19.96 L 5.91 17.36 L 4.31 9.40 Z"
      }
    ]
  ]
};

export const XerograEnhance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.40 4.04 L 18.09 6.64 L 19.69 14.60 L 13.60 19.96 L 5.91 17.36 L 4.31 9.40 Z" />
      {children}
    </svg>
  );
});

export default XerograEnhance;
