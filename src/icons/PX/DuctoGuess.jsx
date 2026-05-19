import React from 'react';

export const iconData = {
  "id": "DuctoGuess",
  "name": "DuctoGuess",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.97 15.26 L 4.66 5.82 L 13.69 2.55 L 21.03 8.74 L 19.34 18.18 L 10.31 21.45 Z"
      }
    ]
  ]
};

export const DuctoGuess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.97 15.26 L 4.66 5.82 L 13.69 2.55 L 21.03 8.74 L 19.34 18.18 L 10.31 21.45 Z" />
      {children}
    </svg>
  );
});

export default DuctoGuess;
