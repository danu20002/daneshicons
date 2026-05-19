import React from 'react';

export const iconData = {
  "id": "SeroHire",
  "name": "SeroHire",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.16 3.76 L 19.58 8.66 L 17.52 18.18 L 7.83 19.16 L 3.90 10.25 Z"
      }
    ]
  ]
};

export const SeroHire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.16 3.76 L 19.58 8.66 L 17.52 18.18 L 7.83 19.16 L 3.90 10.25 Z" />
      {children}
    </svg>
  );
});

export default SeroHire;
