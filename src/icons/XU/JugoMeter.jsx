import React from 'react';

export const iconData = {
  "id": "JugoMeter",
  "name": "JugoMeter",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 6.51 L 20.97 6.51 L 20.97 17.49 L 3.03 17.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 6.51 L 7.42 2.11 L 25.36 2.11 L 20.97 6.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 6.51 L 25.36 2.11 L 25.36 13.10 L 20.97 17.49"
      }
    ]
  ]
};

export const JugoMeter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 6.51 L 20.97 6.51 L 20.97 17.49 L 3.03 17.49 Z" />
      <path d="M 3.03 6.51 L 7.42 2.11 L 25.36 2.11 L 20.97 6.51" />
      <path d="M 20.97 6.51 L 25.36 2.11 L 25.36 13.10 L 20.97 17.49" />
      {children}
    </svg>
  );
});

export default JugoMeter;
