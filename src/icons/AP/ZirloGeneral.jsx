import React from 'react';

export const iconData = {
  "id": "ZirloGeneral",
  "name": "ZirloGeneral",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 2.20 L 12.58 9.01 L 17.52 3.66 L 14.52 10.30 L 21.80 10.00 L 14.99 12.58 L 20.34 17.52 L 13.70 14.52 L 14.00 21.80 L 11.42 14.99 L 6.48 20.34 L 9.48 13.70 L 2.20 14.00 L 9.01 11.42 L 3.66 6.48 L 10.30 9.48 Z"
      }
    ]
  ]
};

export const ZirloGeneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 2.20 L 12.58 9.01 L 17.52 3.66 L 14.52 10.30 L 21.80 10.00 L 14.99 12.58 L 20.34 17.52 L 13.70 14.52 L 14.00 21.80 L 11.42 14.99 L 6.48 20.34 L 9.48 13.70 L 2.20 14.00 L 9.01 11.42 L 3.66 6.48 L 10.30 9.48 Z" />
      {children}
    </svg>
  );
});

export default ZirloGeneral;
