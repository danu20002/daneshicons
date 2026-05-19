import React from 'react';

export const iconData = {
  "id": "VoraceTaxi",
  "name": "VoraceTaxi",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.95 17.97 L 8.78 21.41 L 2.06 11.84 L 9.08 2.50 L 20.13 6.28 Z"
      }
    ]
  ]
};

export const VoraceTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.95 17.97 L 8.78 21.41 L 2.06 11.84 L 9.08 2.50 L 20.13 6.28 Z" />
      {children}
    </svg>
  );
});

export default VoraceTaxi;
