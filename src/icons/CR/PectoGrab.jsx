import React from 'react';

export const iconData = {
  "id": "PectoGrab",
  "name": "PectoGrab",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.37 17.86 L 10.61 21.31 L 3.24 15.45 L 4.63 6.14 L 13.39 2.69 L 20.76 8.55 Z"
      }
    ]
  ]
};

export const PectoGrab = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.37 17.86 L 10.61 21.31 L 3.24 15.45 L 4.63 6.14 L 13.39 2.69 L 20.76 8.55 Z" />
      {children}
    </svg>
  );
});

export default PectoGrab;
