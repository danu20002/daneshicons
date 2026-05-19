import React from 'react';

export const iconData = {
  "id": "JunctoSplit",
  "name": "JunctoSplit",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 22.09 L 10.05 15.37 L 3.26 17.04 L 8.11 12.00 L 3.27 6.96 L 10.05 8.63 L 12.00 1.91 L 13.95 8.63 L 20.74 6.96 L 15.89 12.00 L 20.73 17.04 L 13.95 15.37 Z"
      }
    ]
  ]
};

export const JunctoSplit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 22.09 L 10.05 15.37 L 3.26 17.04 L 8.11 12.00 L 3.27 6.96 L 10.05 8.63 L 12.00 1.91 L 13.95 8.63 L 20.74 6.96 L 15.89 12.00 L 20.73 17.04 L 13.95 15.37 Z" />
      {children}
    </svg>
  );
});

export default JunctoSplit;
