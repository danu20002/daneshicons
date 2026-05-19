import React from 'react';

export const iconData = {
  "id": "SturnoLeisure",
  "name": "SturnoLeisure",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.41 7.58 L 20.03 17.07 L 11.62 21.49 L 3.59 16.42 L 3.97 6.93 L 12.38 2.51 Z"
      }
    ]
  ]
};

export const SturnoLeisure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.41 7.58 L 20.03 17.07 L 11.62 21.49 L 3.59 16.42 L 3.97 6.93 L 12.38 2.51 Z" />
      {children}
    </svg>
  );
});

export default SturnoLeisure;
