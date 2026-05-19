import React from 'react';

export const iconData = {
  "id": "SonnoYouth",
  "name": "SonnoYouth",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.93 2.78 L 18.54 5.41 L 21.23 13.01 L 16.97 19.84 L 8.97 20.78 L 3.25 15.10 L 4.12 7.09 Z"
      }
    ]
  ]
};

export const SonnoYouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.93 2.78 L 18.54 5.41 L 21.23 13.01 L 16.97 19.84 L 8.97 20.78 L 3.25 15.10 L 4.12 7.09 Z" />
      {children}
    </svg>
  );
});

export default SonnoYouth;
