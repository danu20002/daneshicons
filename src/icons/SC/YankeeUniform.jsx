import React from 'react';

export const iconData = {
  "id": "YankeeUniform",
  "name": "YankeeUniform",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.60 10.05 L 19.84 16.03 L 15.41 20.13 L 9.39 20.42 L 4.59 16.77 L 3.25 10.89 L 6.01 5.53 L 11.57 3.19 L 17.33 4.98 Z"
      }
    ]
  ]
};

export const YankeeUniform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.60 10.05 L 19.84 16.03 L 15.41 20.13 L 9.39 20.42 L 4.59 16.77 L 3.25 10.89 L 6.01 5.53 L 11.57 3.19 L 17.33 4.98 Z" />
      {children}
    </svg>
  );
});

export default YankeeUniform;
