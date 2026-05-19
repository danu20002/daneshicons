import React from 'react';

export const iconData = {
  "id": "SpicoCanal",
  "name": "SpicoCanal",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 16.86 L 3.36 11.10 L 5.96 5.76 L 11.39 3.34 L 17.10 4.97 L 20.42 9.89 L 19.81 15.80 L 15.54 19.93 L 9.61 20.35 Z"
      }
    ]
  ]
};

export const SpicoCanal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 16.86 L 3.36 11.10 L 5.96 5.76 L 11.39 3.34 L 17.10 4.97 L 20.42 9.89 L 19.81 15.80 L 15.54 19.93 L 9.61 20.35 Z" />
      {children}
    </svg>
  );
});

export default SpicoCanal;
