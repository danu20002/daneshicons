import React from 'react';

export const iconData = {
  "id": "SpinoStrength",
  "name": "SpinoStrength",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.69 15.18 L 14.88 15.44 L 13.59 21.12 L 10.46 16.21 L 4.90 17.93 L 7.58 12.77 L 3.31 8.82 L 9.12 8.56 L 10.41 2.88 L 13.54 7.79 L 19.10 6.07 L 16.42 11.23 Z"
      }
    ]
  ]
};

export const SpinoStrength = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.69 15.18 L 14.88 15.44 L 13.59 21.12 L 10.46 16.21 L 4.90 17.93 L 7.58 12.77 L 3.31 8.82 L 9.12 8.56 L 10.41 2.88 L 13.54 7.79 L 19.10 6.07 L 16.42 11.23 Z" />
      {children}
    </svg>
  );
});

export default SpinoStrength;
