import React from 'react';

export const iconData = {
  "id": "DigiZone",
  "name": "DigiZone",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.76 19.14 L 8.70 20.56 L 2.94 13.42 L 6.24 4.86 L 15.30 3.44 L 21.06 10.58 Z"
      }
    ]
  ]
};

export const DigiZone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.76 19.14 L 8.70 20.56 L 2.94 13.42 L 6.24 4.86 L 15.30 3.44 L 21.06 10.58 Z" />
      {children}
    </svg>
  );
});

export default DigiZone;
