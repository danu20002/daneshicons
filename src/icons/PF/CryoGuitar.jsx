import React from 'react';

export const iconData = {
  "id": "CryoGuitar",
  "name": "CryoGuitar",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.47 15.02 L 6.78 11.11 L 3.07 5.65 L 9.45 7.37 L 11.40 1.06 L 14.03 7.11 L 20.18 4.71 L 17.09 10.54 L 22.80 13.85 L 16.31 15.07 L 17.29 21.59 L 12.29 17.28 L 7.80 22.12 L 8.05 15.52 Z"
      }
    ]
  ]
};

export const CryoGuitar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.47 15.02 L 6.78 11.11 L 3.07 5.65 L 9.45 7.37 L 11.40 1.06 L 14.03 7.11 L 20.18 4.71 L 17.09 10.54 L 22.80 13.85 L 16.31 15.07 L 17.29 21.59 L 12.29 17.28 L 7.80 22.12 L 8.05 15.52 Z" />
      {children}
    </svg>
  );
});

export default CryoGuitar;
