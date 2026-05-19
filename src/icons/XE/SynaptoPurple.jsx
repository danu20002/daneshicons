import React from 'react';

export const iconData = {
  "id": "SynaptoPurple",
  "name": "SynaptoPurple",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 8.66 L 9.08 2.98 L 17.23 4.09 L 21.44 11.16 L 18.54 18.86 L 10.72 21.39 L 3.86 16.85 Z"
      }
    ]
  ]
};

export const SynaptoPurple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 8.66 L 9.08 2.98 L 17.23 4.09 L 21.44 11.16 L 18.54 18.86 L 10.72 21.39 L 3.86 16.85 Z" />
      {children}
    </svg>
  );
});

export default SynaptoPurple;
