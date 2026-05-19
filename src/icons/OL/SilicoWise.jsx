import React from 'react';

export const iconData = {
  "id": "SilicoWise",
  "name": "SilicoWise",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.18 7.75 L 13.31 2.30 L 21.63 10.25 L 16.64 20.62 L 5.23 19.08 Z"
      }
    ]
  ]
};

export const SilicoWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.18 7.75 L 13.31 2.30 L 21.63 10.25 L 16.64 20.62 L 5.23 19.08 Z" />
      {children}
    </svg>
  );
});

export default SilicoWise;
