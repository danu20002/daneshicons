import React from 'react';

export const iconData = {
  "id": "TrypanoPiece",
  "name": "TrypanoPiece",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.34 11.70 L 12.30 2.34 L 21.66 12.30 L 11.70 21.66 Z"
      }
    ]
  ]
};

export const TrypanoPiece = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.34 11.70 L 12.30 2.34 L 21.66 12.30 L 11.70 21.66 Z" />
      {children}
    </svg>
  );
});

export default TrypanoPiece;
