import React from 'react';

export const iconData = {
  "id": "TurbinoReel",
  "name": "TurbinoReel",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.49 6.61 L 15.03 13.58 L 12.42 22.05 L 9.12 13.83 L 3.09 7.34 L 11.86 8.59 Z"
      }
    ]
  ]
};

export const TurbinoReel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.49 6.61 L 15.03 13.58 L 12.42 22.05 L 9.12 13.83 L 3.09 7.34 L 11.86 8.59 Z" />
      {children}
    </svg>
  );
});

export default TurbinoReel;
