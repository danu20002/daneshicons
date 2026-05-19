import React from 'react';

export const iconData = {
  "id": "NaturaFilm",
  "name": "NaturaFilm",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.45 12.98 L 13.98 21.29 L 3.77 16.76 L 4.93 5.65 L 15.86 3.31 Z"
      }
    ]
  ]
};

export const NaturaFilm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.45 12.98 L 13.98 21.29 L 3.77 16.76 L 4.93 5.65 L 15.86 3.31 Z" />
      {children}
    </svg>
  );
});

export default NaturaFilm;
