import React from 'react';

export const iconData = {
  "id": "StenoHeat",
  "name": "StenoHeat",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.13 4.84 L 13.61 3.49 L 19.16 7.13 L 20.51 13.61 L 16.87 19.16 L 10.39 20.51 L 4.84 16.87 L 3.49 10.39 Z"
      }
    ]
  ]
};

export const StenoHeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.13 4.84 L 13.61 3.49 L 19.16 7.13 L 20.51 13.61 L 16.87 19.16 L 10.39 20.51 L 4.84 16.87 L 3.49 10.39 Z" />
      {children}
    </svg>
  );
});

export default StenoHeat;
