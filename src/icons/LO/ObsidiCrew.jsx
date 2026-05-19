import React from 'react';

export const iconData = {
  "id": "ObsidiCrew",
  "name": "ObsidiCrew",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 12.00 L 9.10 9.10 L 12.00 2.86 L 14.90 9.10 L 21.14 12.00 L 14.90 14.90 L 12.00 21.14 L 9.10 14.90 Z"
      }
    ]
  ]
};

export const ObsidiCrew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 12.00 L 9.10 9.10 L 12.00 2.86 L 14.90 9.10 L 21.14 12.00 L 14.90 14.90 L 12.00 21.14 L 9.10 14.90 Z" />
      {children}
    </svg>
  );
});

export default ObsidiCrew;
