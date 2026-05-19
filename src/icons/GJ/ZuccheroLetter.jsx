import React from 'react';

export const iconData = {
  "id": "ZuccheroLetter",
  "name": "ZuccheroLetter",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.26 13.95 L 16.47 19.22 L 10.05 20.26 L 4.78 16.47 L 3.74 10.05 L 7.53 4.78 L 13.95 3.74 L 19.22 7.53 Z"
      }
    ]
  ]
};

export const ZuccheroLetter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.26 13.95 L 16.47 19.22 L 10.05 20.26 L 4.78 16.47 L 3.74 10.05 L 7.53 4.78 L 13.95 3.74 L 19.22 7.53 Z" />
      {children}
    </svg>
  );
});

export default ZuccheroLetter;
