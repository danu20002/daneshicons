import React from 'react';

export const iconData = {
  "id": "ViaggioSword",
  "name": "ViaggioSword",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.94 19.55 L 8.25 13.46 L 2.43 10.53 L 8.86 9.48 L 8.49 2.97 L 12.61 8.02 L 18.06 4.45 L 15.75 10.54 L 21.57 13.47 L 15.14 14.52 L 15.51 21.03 L 11.39 15.98 Z"
      }
    ]
  ]
};

export const ViaggioSword = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.94 19.55 L 8.25 13.46 L 2.43 10.53 L 8.86 9.48 L 8.49 2.97 L 12.61 8.02 L 18.06 4.45 L 15.75 10.54 L 21.57 13.47 L 15.14 14.52 L 15.51 21.03 L 11.39 15.98 Z" />
      {children}
    </svg>
  );
});

export default ViaggioSword;
