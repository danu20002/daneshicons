import React from 'react';

export const iconData = {
  "id": "SpiriSaga",
  "name": "SpiriSaga",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 21.48 L 9.54 13.99 L 1.80 14.40 L 8.91 11.32 L 3.76 5.52 L 10.61 9.16 L 11.93 1.52 L 13.35 9.14 L 20.15 5.41 L 15.08 11.28 L 22.24 14.26 L 14.49 13.95 L 16.61 21.41 L 12.02 15.16 Z"
      }
    ]
  ]
};

export const SpiriSaga = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 21.48 L 9.54 13.99 L 1.80 14.40 L 8.91 11.32 L 3.76 5.52 L 10.61 9.16 L 11.93 1.52 L 13.35 9.14 L 20.15 5.41 L 15.08 11.28 L 22.24 14.26 L 14.49 13.95 L 16.61 21.41 L 12.02 15.16 Z" />
      {children}
    </svg>
  );
});

export default SpiriSaga;
