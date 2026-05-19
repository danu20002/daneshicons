import React from 'react';

export const iconData = {
  "id": "EunoShift",
  "name": "EunoShift",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 14.99 L 14.81 15.69 L 12.24 22.40 L 9.36 15.82 L 2.18 15.44 L 7.55 10.67 L 5.70 3.72 L 11.89 7.36 L 17.92 3.45 L 16.38 10.47 Z"
      }
    ]
  ]
};

export const EunoShift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 14.99 L 14.81 15.69 L 12.24 22.40 L 9.36 15.82 L 2.18 15.44 L 7.55 10.67 L 5.70 3.72 L 11.89 7.36 L 17.92 3.45 L 16.38 10.47 Z" />
      {children}
    </svg>
  );
});

export default EunoShift;
