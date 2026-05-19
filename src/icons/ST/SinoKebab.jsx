import React from 'react';

export const iconData = {
  "id": "SinoKebab",
  "name": "SinoKebab",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 7.59 L 10.14 3.90 L 16.41 4.96 L 20.10 10.14 L 19.04 16.41 L 13.86 20.10 L 7.59 19.04 L 3.90 13.86 Z"
      }
    ]
  ]
};

export const SinoKebab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 7.59 L 10.14 3.90 L 16.41 4.96 L 20.10 10.14 L 19.04 16.41 L 13.86 20.10 L 7.59 19.04 L 3.90 13.86 Z" />
      {children}
    </svg>
  );
});

export default SinoKebab;
