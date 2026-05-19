import React from 'react';

export const iconData = {
  "id": "SaphoVertical",
  "name": "SaphoVertical",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 12.00 a 7.62 7.62 0 1 0 15.24 0 a 7.62 7.62 0 1 0 -15.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 12.00 a 5.37 5.37 0 1 1 10.73 0 a 5.37 5.37 0 1 1 -10.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 12.00 L 21.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 17.57 L 17.69 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 10.42 18.94 L 9.97 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 15.09 L 3.78 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 8.91 L 3.78 8.04"
      }
    ],
    [
      "path",
      {
        "d": "M 10.42 5.06 L 9.97 3.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 6.43 L 17.69 4.87"
      }
    ]
  ]
};

export const SaphoVertical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 12.00 a 7.62 7.62 0 1 0 15.24 0 a 7.62 7.62 0 1 0 -15.24 0" />
      <path d="M 6.63 12.00 a 5.37 5.37 0 1 1 10.73 0 a 5.37 5.37 0 1 1 -10.73 0" />
      <path d="M 19.12 12.00 L 21.12 12.00" />
      <path d="M 16.44 17.57 L 17.69 19.13" />
      <path d="M 10.42 18.94 L 9.97 20.89" />
      <path d="M 5.58 15.09 L 3.78 15.96" />
      <path d="M 5.58 8.91 L 3.78 8.04" />
      <path d="M 10.42 5.06 L 9.97 3.11" />
      <path d="M 16.44 6.43 L 17.69 4.87" />
      {children}
    </svg>
  );
});

export default SaphoVertical;
