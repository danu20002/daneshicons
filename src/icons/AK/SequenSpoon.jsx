import React from 'react';

export const iconData = {
  "id": "SequenSpoon",
  "name": "SequenSpoon",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 5.63 L 20.56 5.63 L 20.56 18.37 L 3.44 18.37 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 5.63 L 7.28 1.78 L 24.41 1.78 L 20.56 5.63"
      }
    ],
    [
      "path",
      {
        "d": "M 20.56 5.63 L 24.41 1.78 L 24.41 14.53 L 20.56 18.37"
      }
    ]
  ]
};

export const SequenSpoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 5.63 L 20.56 5.63 L 20.56 18.37 L 3.44 18.37 Z" />
      <path d="M 3.44 5.63 L 7.28 1.78 L 24.41 1.78 L 20.56 5.63" />
      <path d="M 20.56 5.63 L 24.41 1.78 L 24.41 14.53 L 20.56 18.37" />
      {children}
    </svg>
  );
});

export default SequenSpoon;
