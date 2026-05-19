import React from 'react';

export const iconData = {
  "id": "SomaRudder",
  "name": "SomaRudder",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.08 21.31 L 10.17 17.29 L 5.40 18.65 L 6.73 13.87 L 2.68 10.98 L 7.25 9.04 L 6.99 4.08 L 11.35 6.44 L 15.06 3.14 L 15.94 8.03 L 20.84 8.87 L 17.56 12.61 L 19.95 16.96 L 14.99 16.73 Z"
      }
    ]
  ]
};

export const SomaRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.08 21.31 L 10.17 17.29 L 5.40 18.65 L 6.73 13.87 L 2.68 10.98 L 7.25 9.04 L 6.99 4.08 L 11.35 6.44 L 15.06 3.14 L 15.94 8.03 L 20.84 8.87 L 17.56 12.61 L 19.95 16.96 L 14.99 16.73 Z" />
      {children}
    </svg>
  );
});

export default SomaRudder;
