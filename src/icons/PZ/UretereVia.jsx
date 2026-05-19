import React from 'react';

export const iconData = {
  "id": "UretereVia",
  "name": "UretereVia",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.27 1.81 L 13.76 7.26 L 19.96 5.41 L 16.99 11.16 L 21.69 15.60 L 15.23 15.90 L 13.73 22.19 L 10.24 16.74 L 4.04 18.59 L 7.01 12.84 L 2.31 8.40 L 8.77 8.10 Z"
      }
    ]
  ]
};

export const UretereVia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.27 1.81 L 13.76 7.26 L 19.96 5.41 L 16.99 11.16 L 21.69 15.60 L 15.23 15.90 L 13.73 22.19 L 10.24 16.74 L 4.04 18.59 L 7.01 12.84 L 2.31 8.40 L 8.77 8.10 Z" />
      {children}
    </svg>
  );
});

export default UretereVia;
