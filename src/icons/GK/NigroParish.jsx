import React from 'react';

export const iconData = {
  "id": "NigroParish",
  "name": "NigroParish",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.69 4.79 L 13.71 2.57 L 20.43 7.46 L 20.81 15.76 L 14.55 21.23 L 6.37 19.75 L 2.43 12.43 Z"
      }
    ]
  ]
};

export const NigroParish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.69 4.79 L 13.71 2.57 L 20.43 7.46 L 20.81 15.76 L 14.55 21.23 L 6.37 19.75 L 2.43 12.43 Z" />
      {children}
    </svg>
  );
});

export default NigroParish;
