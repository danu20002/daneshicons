import React from 'react';

export const iconData = {
  "id": "ArchiKnow",
  "name": "ArchiKnow",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 3.07 L 16.05 3.73 L 20.41 8.27 L 20.84 14.55 L 17.14 19.64 L 11.02 21.15 L 5.37 18.38 L 2.82 12.63 L 4.56 6.58 Z"
      }
    ]
  ]
};

export const ArchiKnow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 3.07 L 16.05 3.73 L 20.41 8.27 L 20.84 14.55 L 17.14 19.64 L 11.02 21.15 L 5.37 18.38 L 2.82 12.63 L 4.56 6.58 Z" />
      {children}
    </svg>
  );
});

export default ArchiKnow;
