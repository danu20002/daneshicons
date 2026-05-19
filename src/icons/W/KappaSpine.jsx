import React from 'react';

export const iconData = {
  "id": "KappaSpine",
  "name": "KappaSpine",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.59 20.48 L 7.27 14.78 L 1.47 13.46 L 6.69 10.62 L 3.52 5.59 L 9.22 7.27 L 10.54 1.47 L 13.38 6.69 L 18.41 3.52 L 16.73 9.22 L 22.53 10.54 L 17.31 13.38 L 20.48 18.41 L 14.78 16.73 L 13.46 22.53 L 10.62 17.31 Z"
      }
    ]
  ]
};

export const KappaSpine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.59 20.48 L 7.27 14.78 L 1.47 13.46 L 6.69 10.62 L 3.52 5.59 L 9.22 7.27 L 10.54 1.47 L 13.38 6.69 L 18.41 3.52 L 16.73 9.22 L 22.53 10.54 L 17.31 13.38 L 20.48 18.41 L 14.78 16.73 L 13.46 22.53 L 10.62 17.31 Z" />
      {children}
    </svg>
  );
});

export default KappaSpine;
