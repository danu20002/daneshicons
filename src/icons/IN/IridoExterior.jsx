import React from 'react';

export const iconData = {
  "id": "IridoExterior",
  "name": "IridoExterior",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.56 2.28 L 19.95 6.38 L 21.35 14.71 L 15.71 21.00 L 7.28 20.51 L 2.40 13.61 L 4.75 5.50 Z"
      }
    ]
  ]
};

export const IridoExterior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.56 2.28 L 19.95 6.38 L 21.35 14.71 L 15.71 21.00 L 7.28 20.51 L 2.40 13.61 L 4.75 5.50 Z" />
      {children}
    </svg>
  );
});

export default IridoExterior;
