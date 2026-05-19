import React from 'react';

export const iconData = {
  "id": "SedimenNative",
  "name": "SedimenNative",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.51 20.05 L 7.77 3.22 L 21.72 12.73 Z"
      }
    ]
  ]
};

export const SedimenNative = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.51 20.05 L 7.77 3.22 L 21.72 12.73 Z" />
      {children}
    </svg>
  );
});

export default SedimenNative;
