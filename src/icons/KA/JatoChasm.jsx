import React from 'react';

export const iconData = {
  "id": "JatoChasm",
  "name": "JatoChasm",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.35 4.31 L 20.51 9.64 L 19.69 16.35 L 14.36 20.51 L 7.65 19.69 L 3.49 14.36 L 4.31 7.65 L 9.64 3.49 Z"
      }
    ]
  ]
};

export const JatoChasm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.35 4.31 L 20.51 9.64 L 19.69 16.35 L 14.36 20.51 L 7.65 19.69 L 3.49 14.36 L 4.31 7.65 L 9.64 3.49 Z" />
      {children}
    </svg>
  );
});

export default JatoChasm;
