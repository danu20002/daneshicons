import React from 'react';

export const iconData = {
  "id": "NarcisoConch",
  "name": "NarcisoConch",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.86 10.23 L 14.86 10.23"
      }
    ],
    [
      "path",
      {
        "d": "M 13.77 10.86 L 13.77 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 13.77 L 9.14 13.77"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 13.14 L 10.23 9.14"
      }
    ]
  ]
};

export const NarcisoConch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.86 10.23 L 14.86 10.23" />
      <path d="M 13.77 10.86 L 13.77 14.86" />
      <path d="M 13.14 13.77 L 9.14 13.77" />
      <path d="M 10.23 13.14 L 10.23 9.14" />
      {children}
    </svg>
  );
});

export default NarcisoConch;
