import React from 'react';

export const iconData = {
  "id": "NectoPluck",
  "name": "NectoPluck",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.35 3.38 L 21.14 10.59 L 17.79 19.21 L 8.65 20.62 L 2.86 13.41 L 6.21 4.79 Z"
      }
    ]
  ]
};

export const NectoPluck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.35 3.38 L 21.14 10.59 L 17.79 19.21 L 8.65 20.62 L 2.86 13.41 L 6.21 4.79 Z" />
      {children}
    </svg>
  );
});

export default NectoPluck;
