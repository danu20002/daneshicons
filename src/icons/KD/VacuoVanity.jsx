import React from 'react';

export const iconData = {
  "id": "VacuoVanity",
  "name": "VacuoVanity",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 19.45 L 7.41 13.09 L 1.62 8.91 L 8.76 8.57 L 9.49 1.46 L 13.35 7.48 L 19.87 4.55 L 16.59 10.91 L 22.38 15.09 L 15.24 15.43 L 14.51 22.54 L 10.65 16.52 Z"
      }
    ]
  ]
};

export const VacuoVanity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 19.45 L 7.41 13.09 L 1.62 8.91 L 8.76 8.57 L 9.49 1.46 L 13.35 7.48 L 19.87 4.55 L 16.59 10.91 L 22.38 15.09 L 15.24 15.43 L 14.51 22.54 L 10.65 16.52 Z" />
      {children}
    </svg>
  );
});

export default VacuoVanity;
