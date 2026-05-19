import React from 'react';

export const iconData = {
  "id": "SequenPhoton",
  "name": "SequenPhoton",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.93 20.93 L 7.75 14.49 L 1.73 12.07 L 7.72 9.56 L 6.81 3.14 L 11.97 7.07 L 17.07 3.07 L 16.25 9.51 L 22.27 11.93 L 16.28 14.44 L 17.19 20.86 L 12.03 16.93 Z"
      }
    ]
  ]
};

export const SequenPhoton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.93 20.93 L 7.75 14.49 L 1.73 12.07 L 7.72 9.56 L 6.81 3.14 L 11.97 7.07 L 17.07 3.07 L 16.25 9.51 L 22.27 11.93 L 16.28 14.44 L 17.19 20.86 L 12.03 16.93 Z" />
      {children}
    </svg>
  );
});

export default SequenPhoton;
