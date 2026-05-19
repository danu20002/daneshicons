import React from 'react';

export const iconData = {
  "id": "SomaJoy",
  "name": "SomaJoy",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.64 15.80 L 10.24 17.93 L 12.22 20.57 L 10.24 21.29 L 8.72 19.57 L 9.15 21.21 L 7.95 22.60 L 6.26 21.71 L 7.94 20.48 L 5.55 19.23 L 7.61 18.41 L 5.06 19.66 L 2.07 18.22 L 1.00 20.88 L 1.00 19.22 L 2.54 21.37 L 4.58 22.66 L 6.95 23.00"
      }
    ]
  ]
};

export const SomaJoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.64 15.80 L 10.24 17.93 L 12.22 20.57 L 10.24 21.29 L 8.72 19.57 L 9.15 21.21 L 7.95 22.60 L 6.26 21.71 L 7.94 20.48 L 5.55 19.23 L 7.61 18.41 L 5.06 19.66 L 2.07 18.22 L 1.00 20.88 L 1.00 19.22 L 2.54 21.37 L 4.58 22.66 L 6.95 23.00" />
      {children}
    </svg>
  );
});

export default SomaJoy;
