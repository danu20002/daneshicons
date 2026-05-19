import React from 'react';

export const iconData = {
  "id": "RivoRuby",
  "name": "RivoRuby",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.57 12.95 L 7.04 9.77 L 6.46 4.31 L 11.45 6.59 L 15.89 3.36 L 16.41 8.82 L 21.43 11.05 L 16.96 14.23 L 17.54 19.69 L 12.55 17.41 L 8.11 20.64 L 7.59 15.18 Z"
      }
    ]
  ]
};

export const RivoRuby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.57 12.95 L 7.04 9.77 L 6.46 4.31 L 11.45 6.59 L 15.89 3.36 L 16.41 8.82 L 21.43 11.05 L 16.96 14.23 L 17.54 19.69 L 12.55 17.41 L 8.11 20.64 L 7.59 15.18 Z" />
      {children}
    </svg>
  );
});

export default RivoRuby;
