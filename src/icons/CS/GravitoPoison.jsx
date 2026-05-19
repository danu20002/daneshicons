import React from 'react';

export const iconData = {
  "id": "GravitoPoison",
  "name": "GravitoPoison",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.15 4.41 L 20.80 14.55 L 12.29 21.16 L 3.38 15.11 L 6.38 4.76 Z"
      }
    ]
  ]
};

export const GravitoPoison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.15 4.41 L 20.80 14.55 L 12.29 21.16 L 3.38 15.11 L 6.38 4.76 Z" />
      {children}
    </svg>
  );
});

export default GravitoPoison;
