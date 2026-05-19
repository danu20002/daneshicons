import React from 'react';

export const iconData = {
  "id": "PlanoSenate",
  "name": "PlanoSenate",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.40 7.21 L 12.85 3.89 L 19.45 8.68 L 18.60 16.79 L 11.15 20.11 L 4.55 15.32 Z"
      }
    ]
  ]
};

export const PlanoSenate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.40 7.21 L 12.85 3.89 L 19.45 8.68 L 18.60 16.79 L 11.15 20.11 L 4.55 15.32 Z" />
      {children}
    </svg>
  );
});

export default PlanoSenate;
