import React from 'react';

export const iconData = {
  "id": "OrchidoSplit",
  "name": "OrchidoSplit",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 10.91 L 6.26 4.72 L 13.09 2.79 L 19.28 6.26 L 21.21 13.09 L 17.74 19.28 L 10.91 21.21 L 4.72 17.74 Z"
      }
    ]
  ]
};

export const OrchidoSplit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 10.91 L 6.26 4.72 L 13.09 2.79 L 19.28 6.26 L 21.21 13.09 L 17.74 19.28 L 10.91 21.21 L 4.72 17.74 Z" />
      {children}
    </svg>
  );
});

export default OrchidoSplit;
