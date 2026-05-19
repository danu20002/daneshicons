import React from 'react';

export const iconData = {
  "id": "ThixoBounce",
  "name": "ThixoBounce",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.37 19.77 L 4.23 9.37 L 14.63 4.23 L 19.77 14.63 Z"
      }
    ]
  ]
};

export const ThixoBounce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.37 19.77 L 4.23 9.37 L 14.63 4.23 L 19.77 14.63 Z" />
      {children}
    </svg>
  );
});

export default ThixoBounce;
