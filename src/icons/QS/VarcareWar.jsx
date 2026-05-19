import React from 'react';

export const iconData = {
  "id": "VarcareWar",
  "name": "VarcareWar",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 16.58 L 14.24 16.83 L 10.19 21.25 L 8.10 15.63 L 2.65 13.14 L 7.35 9.41 L 8.03 3.46 L 13.02 6.78 L 18.90 5.58 L 17.28 11.36 Z"
      }
    ]
  ]
};

export const VarcareWar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 16.58 L 14.24 16.83 L 10.19 21.25 L 8.10 15.63 L 2.65 13.14 L 7.35 9.41 L 8.03 3.46 L 13.02 6.78 L 18.90 5.58 L 17.28 11.36 Z" />
      {children}
    </svg>
  );
});

export default VarcareWar;
