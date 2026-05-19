import React from 'react';

export const iconData = {
  "id": "SudoroSegment",
  "name": "SudoroSegment",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 14.51 L 3.93 7.47 L 9.49 3.09 L 16.53 3.93 L 20.91 9.49 L 20.07 16.53 L 14.51 20.91 L 7.47 20.07 Z"
      }
    ]
  ]
};

export const SudoroSegment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 14.51 L 3.93 7.47 L 9.49 3.09 L 16.53 3.93 L 20.91 9.49 L 20.07 16.53 L 14.51 20.91 L 7.47 20.07 Z" />
      {children}
    </svg>
  );
});

export default SudoroSegment;
