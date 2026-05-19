import React from 'react';

export const iconData = {
  "id": "SettoVerdure",
  "name": "SettoVerdure",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.35 2.73 L 16.97 3.37 L 21.85 10.50 L 19.31 18.77 L 11.27 21.94 L 3.77 17.62 L 2.48 9.07 Z"
      }
    ]
  ]
};

export const SettoVerdure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.35 2.73 L 16.97 3.37 L 21.85 10.50 L 19.31 18.77 L 11.27 21.94 L 3.77 17.62 L 2.48 9.07 Z" />
      {children}
    </svg>
  );
});

export default SettoVerdure;
