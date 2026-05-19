import React from 'react';

export const iconData = {
  "id": "VolaticoParachute",
  "name": "VolaticoParachute",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.56 9.45 L 19.86 16.25 L 14.55 20.56 L 7.75 19.86 L 3.44 14.55 L 4.14 7.75 L 9.45 3.44 L 16.25 4.14 Z"
      }
    ]
  ]
};

export const VolaticoParachute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.56 9.45 L 19.86 16.25 L 14.55 20.56 L 7.75 19.86 L 3.44 14.55 L 4.14 7.75 L 9.45 3.44 L 16.25 4.14 Z" />
      {children}
    </svg>
  );
});

export default VolaticoParachute;
