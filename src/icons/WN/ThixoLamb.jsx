import React from 'react';

export const iconData = {
  "id": "ThixoLamb",
  "name": "ThixoLamb",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.67 3.53 L 17.65 10.88 L 20.47 17.67 L 13.12 17.65 L 6.33 20.47 L 6.35 13.12 L 3.53 6.33 L 10.88 6.35 Z"
      }
    ]
  ]
};

export const ThixoLamb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.67 3.53 L 17.65 10.88 L 20.47 17.67 L 13.12 17.65 L 6.33 20.47 L 6.35 13.12 L 3.53 6.33 L 10.88 6.35 Z" />
      {children}
    </svg>
  );
});

export default ThixoLamb;
