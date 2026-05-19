import React from 'react';

export const iconData = {
  "id": "XenotimRhyme",
  "name": "XenotimRhyme",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.37 15.61 L 14.60 15.74 L 11.77 22.97 L 9.24 15.63 L 1.49 15.17 L 7.69 10.50 L 5.73 2.99 L 12.09 7.44 L 18.63 3.26 L 16.36 10.68 Z"
      }
    ]
  ]
};

export const XenotimRhyme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.37 15.61 L 14.60 15.74 L 11.77 22.97 L 9.24 15.63 L 1.49 15.17 L 7.69 10.50 L 5.73 2.99 L 12.09 7.44 L 18.63 3.26 L 16.36 10.68 Z" />
      {children}
    </svg>
  );
});

export default XenotimRhyme;
