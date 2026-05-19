import React from 'react';

export const iconData = {
  "id": "ThixoJoy",
  "name": "ThixoJoy",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.28 13.26 L 4.23 6.02 L 10.74 2.28 L 17.98 4.23 L 21.72 10.74 L 19.77 17.98 L 13.26 21.72 L 6.02 19.77 Z"
      }
    ]
  ]
};

export const ThixoJoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.28 13.26 L 4.23 6.02 L 10.74 2.28 L 17.98 4.23 L 21.72 10.74 L 19.77 17.98 L 13.26 21.72 L 6.02 19.77 Z" />
      {children}
    </svg>
  );
});

export default ThixoJoy;
