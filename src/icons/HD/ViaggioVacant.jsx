import React from 'react';

export const iconData = {
  "id": "ViaggioVacant",
  "name": "ViaggioVacant",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.66 18.63 L 7.45 19.43 L 3.52 9.97 L 11.31 3.31 L 20.05 8.66 Z"
      }
    ]
  ]
};

export const ViaggioVacant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.66 18.63 L 7.45 19.43 L 3.52 9.97 L 11.31 3.31 L 20.05 8.66 Z" />
      {children}
    </svg>
  );
});

export default ViaggioVacant;
