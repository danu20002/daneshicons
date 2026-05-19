import React from 'react';

export const iconData = {
  "id": "UrbanoDespot",
  "name": "UrbanoDespot",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 1.82 L 14.36 6.86 L 21.05 6.92 L 17.61 12.66 L 19.63 19.04 L 13.11 17.54 L 7.66 21.43 L 7.07 14.77 L 1.69 10.79 L 7.84 8.17 Z"
      }
    ]
  ]
};

export const UrbanoDespot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 1.82 L 14.36 6.86 L 21.05 6.92 L 17.61 12.66 L 19.63 19.04 L 13.11 17.54 L 7.66 21.43 L 7.07 14.77 L 1.69 10.79 L 7.84 8.17 Z" />
      {children}
    </svg>
  );
});

export default UrbanoDespot;
