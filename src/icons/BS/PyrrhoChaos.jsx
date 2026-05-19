import React from 'react';

export const iconData = {
  "id": "PyrrhoChaos",
  "name": "PyrrhoChaos",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.37 13.54 L 10.46 21.37 L 2.63 10.46 L 13.54 2.63 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 14.32 L 9.68 17.77 L 6.23 9.68 L 14.32 6.23 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 14.29 L 9.71 14.55 L 9.45 9.71 L 14.29 9.45 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.01 12.01 L 11.99 12.01 L 11.99 11.99 L 12.01 11.99 Z"
      }
    ]
  ]
};

export const PyrrhoChaos = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.37 13.54 L 10.46 21.37 L 2.63 10.46 L 13.54 2.63 Z" />
      <path d="M 17.77 14.32 L 9.68 17.77 L 6.23 9.68 L 14.32 6.23 Z" />
      <path d="M 14.55 14.29 L 9.71 14.55 L 9.45 9.71 L 14.29 9.45 Z" />
      <path d="M 12.01 12.01 L 11.99 12.01 L 11.99 11.99 L 12.01 11.99 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoChaos;
