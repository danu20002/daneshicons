import React from 'react';

export const iconData = {
  "id": "NovoYellow",
  "name": "NovoYellow",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 9.76 L 10.57 7.21 L 18.64 4.97 L 16.86 13.16 L 14.77 21.26 L 8.57 15.63 Z"
      }
    ]
  ]
};

export const NovoYellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 9.76 L 10.57 7.21 L 18.64 4.97 L 16.86 13.16 L 14.77 21.26 L 8.57 15.63 Z" />
      {children}
    </svg>
  );
});

export default NovoYellow;
