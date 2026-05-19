import React from 'react';

export const iconData = {
  "id": "PunctoTyrant",
  "name": "PunctoTyrant",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.80 5.74 L 16.36 10.99 L 21.76 14.20 L 15.51 14.78 L 16.37 21.00 L 12.01 16.48 L 7.69 21.03 L 8.51 14.80 L 2.25 14.26 L 7.63 11.02 L 4.16 5.79 L 10.04 7.97 L 11.97 2.00 L 13.93 7.96 Z"
      }
    ]
  ]
};

export const PunctoTyrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.80 5.74 L 16.36 10.99 L 21.76 14.20 L 15.51 14.78 L 16.37 21.00 L 12.01 16.48 L 7.69 21.03 L 8.51 14.80 L 2.25 14.26 L 7.63 11.02 L 4.16 5.79 L 10.04 7.97 L 11.97 2.00 L 13.93 7.96 Z" />
      {children}
    </svg>
  );
});

export default PunctoTyrant;
