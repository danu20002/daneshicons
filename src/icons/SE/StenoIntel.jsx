import React from 'react';

export const iconData = {
  "id": "StenoIntel",
  "name": "StenoIntel",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.44 21.81 L 7.58 14.82 L 3.29 7.48 L 11.77 6.76 L 20.27 6.72 L 16.65 14.42 Z"
      }
    ]
  ]
};

export const StenoIntel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.44 21.81 L 7.58 14.82 L 3.29 7.48 L 11.77 6.76 L 20.27 6.72 L 16.65 14.42 Z" />
      {children}
    </svg>
  );
});

export default StenoIntel;
