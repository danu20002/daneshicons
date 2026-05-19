import React from 'react';

export const iconData = {
  "id": "QuintVegetable",
  "name": "QuintVegetable",
  "category": "LK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 1 10.66 0 a 5.33 5.33 0 1 1 -10.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 12.00 L 21.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 17.46 L 18.88 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.73 L 12.00 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 17.46 L 5.12 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 12.00 L 2.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 6.54 L 5.12 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.27 L 12.00 2.27"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 6.54 L 18.88 5.12"
      }
    ]
  ]
};

export const QuintVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 1 10.66 0 a 5.33 5.33 0 1 1 -10.66 0" />
      <path d="M 19.73 12.00 L 21.73 12.00" />
      <path d="M 17.46 17.46 L 18.88 18.88" />
      <path d="M 12.00 19.73 L 12.00 21.73" />
      <path d="M 6.54 17.46 L 5.12 18.88" />
      <path d="M 4.27 12.00 L 2.27 12.00" />
      <path d="M 6.54 6.54 L 5.12 5.12" />
      <path d="M 12.00 4.27 L 12.00 2.27" />
      <path d="M 17.46 6.54 L 18.88 5.12" />
      {children}
    </svg>
  );
});

export default QuintVegetable;
