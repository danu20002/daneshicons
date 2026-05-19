import React from 'react';

export const iconData = {
  "id": "SanguiNickel",
  "name": "SanguiNickel",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 17.01 L 14.66 16.37 L 12.24 22.42 L 9.54 16.49 L 3.09 17.41 L 6.88 12.12 L 2.86 6.99 L 9.34 7.63 L 11.76 1.58 L 14.46 7.51 L 20.91 6.59 L 17.12 11.88 Z"
      }
    ]
  ]
};

export const SanguiNickel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 17.01 L 14.66 16.37 L 12.24 22.42 L 9.54 16.49 L 3.09 17.41 L 6.88 12.12 L 2.86 6.99 L 9.34 7.63 L 11.76 1.58 L 14.46 7.51 L 20.91 6.59 L 17.12 11.88 Z" />
      {children}
    </svg>
  );
});

export default SanguiNickel;
