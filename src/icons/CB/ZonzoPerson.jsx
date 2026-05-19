import React from 'react';

export const iconData = {
  "id": "ZonzoPerson",
  "name": "ZonzoPerson",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.75 18.21 L 14.30 16.96 L 12.38 21.17 L 10.12 17.14 L 5.79 18.75 L 7.04 14.30 L 2.83 12.38 L 6.86 10.12 L 5.25 5.79 L 9.70 7.04 L 11.62 2.83 L 13.88 6.86 L 18.21 5.25 L 16.96 9.70 L 21.17 11.62 L 17.14 13.88 Z"
      }
    ]
  ]
};

export const ZonzoPerson = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.75 18.21 L 14.30 16.96 L 12.38 21.17 L 10.12 17.14 L 5.79 18.75 L 7.04 14.30 L 2.83 12.38 L 6.86 10.12 L 5.25 5.79 L 9.70 7.04 L 11.62 2.83 L 13.88 6.86 L 18.21 5.25 L 16.96 9.70 L 21.17 11.62 L 17.14 13.88 Z" />
      {children}
    </svg>
  );
});

export default ZonzoPerson;
