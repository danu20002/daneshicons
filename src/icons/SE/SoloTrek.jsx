import React from 'react';

export const iconData = {
  "id": "SoloTrek",
  "name": "SoloTrek",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.54 2.94 L 15.51 9.23 L 21.40 11.61 L 15.72 14.48 L 15.27 20.82 L 10.79 16.30 L 4.63 17.84 L 7.53 12.18 L 4.17 6.79 L 10.44 7.81 Z"
      }
    ]
  ]
};

export const SoloTrek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.54 2.94 L 15.51 9.23 L 21.40 11.61 L 15.72 14.48 L 15.27 20.82 L 10.79 16.30 L 4.63 17.84 L 7.53 12.18 L 4.17 6.79 L 10.44 7.81 Z" />
      {children}
    </svg>
  );
});

export default SoloTrek;
