import React from 'react';

export const iconData = {
  "id": "ValicoPark",
  "name": "ValicoPark",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.55 20.97 L 11.01 15.86 L 4.56 18.15 L 8.03 12.25 L 3.86 6.83 L 10.54 8.30 L 14.40 2.66 L 15.07 9.46 L 21.63 11.40 L 15.36 14.13 Z"
      }
    ]
  ]
};

export const ValicoPark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.55 20.97 L 11.01 15.86 L 4.56 18.15 L 8.03 12.25 L 3.86 6.83 L 10.54 8.30 L 14.40 2.66 L 15.07 9.46 L 21.63 11.40 L 15.36 14.13 Z" />
      {children}
    </svg>
  );
});

export default ValicoPark;
