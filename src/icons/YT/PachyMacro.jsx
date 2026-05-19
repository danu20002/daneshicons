import React from 'react';

export const iconData = {
  "id": "PachyMacro",
  "name": "PachyMacro",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 13.38 L 8.64 10.25 L 7.84 3.67 L 12.62 8.26 L 18.64 5.47 L 15.75 11.44 L 20.26 16.30 L 13.69 15.39 L 10.47 21.18 L 9.30 14.66 Z"
      }
    ]
  ]
};

export const PachyMacro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 13.38 L 8.64 10.25 L 7.84 3.67 L 12.62 8.26 L 18.64 5.47 L 15.75 11.44 L 20.26 16.30 L 13.69 15.39 L 10.47 21.18 L 9.30 14.66 Z" />
      {children}
    </svg>
  );
});

export default PachyMacro;
