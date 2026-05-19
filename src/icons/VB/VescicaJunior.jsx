import React from 'react';

export const iconData = {
  "id": "VescicaJunior",
  "name": "VescicaJunior",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.13 22.73 L 9.75 14.18 L 1.22 13.54 L 9.23 10.54 L 7.20 2.22 L 12.54 8.91 L 19.82 4.42 L 15.10 11.56 L 21.63 17.09 L 13.38 14.81 Z"
      }
    ]
  ]
};

export const VescicaJunior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.13 22.73 L 9.75 14.18 L 1.22 13.54 L 9.23 10.54 L 7.20 2.22 L 12.54 8.91 L 19.82 4.42 L 15.10 11.56 L 21.63 17.09 L 13.38 14.81 Z" />
      {children}
    </svg>
  );
});

export default VescicaJunior;
