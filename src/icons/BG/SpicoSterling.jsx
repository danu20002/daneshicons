import React from 'react';

export const iconData = {
  "id": "SpicoSterling",
  "name": "SpicoSterling",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.66 11.49 L 15.16 20.08 L 5.29 17.50 L 4.70 7.32 L 14.19 3.61 Z"
      }
    ]
  ]
};

export const SpicoSterling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.66 11.49 L 15.16 20.08 L 5.29 17.50 L 4.70 7.32 L 14.19 3.61 Z" />
      {children}
    </svg>
  );
});

export default SpicoSterling;
