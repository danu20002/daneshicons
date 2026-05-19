import React from 'react';

export const iconData = {
  "id": "NanoCarnival",
  "name": "NanoCarnival",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.16 20.31 L 3.88 14.56 L 5.72 6.25 L 13.84 3.69 L 20.12 9.44 L 18.28 17.75 Z"
      }
    ]
  ]
};

export const NanoCarnival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.16 20.31 L 3.88 14.56 L 5.72 6.25 L 13.84 3.69 L 20.12 9.44 L 18.28 17.75 Z" />
      {children}
    </svg>
  );
});

export default NanoCarnival;
