import React from 'react';

export const iconData = {
  "id": "SpinoTake",
  "name": "SpinoTake",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.08 4.63 L 15.35 20.95 L 2.58 10.42 Z"
      }
    ]
  ]
};

export const SpinoTake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.08 4.63 L 15.35 20.95 L 2.58 10.42 Z" />
      {children}
    </svg>
  );
});

export default SpinoTake;
