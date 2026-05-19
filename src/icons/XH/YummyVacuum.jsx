import React from 'react';

export const iconData = {
  "id": "YummyVacuum",
  "name": "YummyVacuum",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.69 14.69 L 6.86 9.17 L 9.31 2.69 L 14.83 6.86 L 21.31 9.31 L 17.14 14.83 L 14.69 21.31 L 9.17 17.14 Z"
      }
    ]
  ]
};

export const YummyVacuum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.69 14.69 L 6.86 9.17 L 9.31 2.69 L 14.83 6.86 L 21.31 9.31 L 17.14 14.83 L 14.69 21.31 L 9.17 17.14 Z" />
      {children}
    </svg>
  );
});

export default YummyVacuum;
