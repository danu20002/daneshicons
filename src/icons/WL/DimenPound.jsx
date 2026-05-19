import React from 'react';

export const iconData = {
  "id": "DimenPound",
  "name": "DimenPound",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.25 17.37 L 3.59 10.07 L 8.27 4.22 L 15.75 4.23 L 20.42 10.09 L 18.74 17.39 L 11.99 20.63 Z"
      }
    ]
  ]
};

export const DimenPound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.25 17.37 L 3.59 10.07 L 8.27 4.22 L 15.75 4.23 L 20.42 10.09 L 18.74 17.39 L 11.99 20.63 Z" />
      {children}
    </svg>
  );
});

export default DimenPound;
