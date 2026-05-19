import React from 'react';

export const iconData = {
  "id": "SelenoQuota",
  "name": "SelenoQuota",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 5.61 L 19.84 5.61 L 19.84 18.39 L 4.16 18.39 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 5.61 L 7.69 2.08 L 23.37 2.08 L 19.84 5.61"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 5.61 L 23.37 2.08 L 23.37 14.86 L 19.84 18.39"
      }
    ]
  ]
};

export const SelenoQuota = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 5.61 L 19.84 5.61 L 19.84 18.39 L 4.16 18.39 Z" />
      <path d="M 4.16 5.61 L 7.69 2.08 L 23.37 2.08 L 19.84 5.61" />
      <path d="M 19.84 5.61 L 23.37 2.08 L 23.37 14.86 L 19.84 18.39" />
      {children}
    </svg>
  );
});

export default SelenoQuota;
