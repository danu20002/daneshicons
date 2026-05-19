import React from 'react';

export const iconData = {
  "id": "LensoSong",
  "name": "LensoSong",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.99 10.75 L 10.76 9.08 L 18.08 3.95 L 15.15 12.39 L 15.93 21.29 L 10.09 14.53 Z"
      }
    ]
  ]
};

export const LensoSong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.99 10.75 L 10.76 9.08 L 18.08 3.95 L 15.15 12.39 L 15.93 21.29 L 10.09 14.53 Z" />
      {children}
    </svg>
  );
});

export default LensoSong;
