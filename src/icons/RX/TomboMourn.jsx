import React from 'react';

export const iconData = {
  "id": "TomboMourn",
  "name": "TomboMourn",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 12.00 a 9.24 9.24 0 1 0 18.47 0 a 9.24 9.24 0 1 0 -18.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 7.38 a 8.00 2.399625737460713 0 1 0 16.00 0 a 8.00 2.399625737460713 0 1 0 -16.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 12.00 a 9.24 2.7708491309545935 0 1 0 18.47 0 a 9.24 2.7708491309545935 0 1 0 -18.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 16.62 a 8.00 2.399625737460713 0 1 0 16.00 0 a 8.00 2.399625737460713 0 1 0 -16.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.76 A 2 2 0 0 0 12.00 21.24"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.76 A 2 2 0 0 1 12.00 21.24"
      }
    ]
  ]
};

export const TomboMourn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 12.00 a 9.24 9.24 0 1 0 18.47 0 a 9.24 9.24 0 1 0 -18.47 0" />
      <path d="M 4.00 7.38 a 8.00 2.399625737460713 0 1 0 16.00 0 a 8.00 2.399625737460713 0 1 0 -16.00 0" />
      <path d="M 2.76 12.00 a 9.24 2.7708491309545935 0 1 0 18.47 0 a 9.24 2.7708491309545935 0 1 0 -18.47 0" />
      <path d="M 4.00 16.62 a 8.00 2.399625737460713 0 1 0 16.00 0 a 8.00 2.399625737460713 0 1 0 -16.00 0" />
      <path d="M 12.00 2.76 A 2 2 0 0 0 12.00 21.24" />
      <path d="M 12.00 2.76 A 2 2 0 0 1 12.00 21.24" />
      {children}
    </svg>
  );
});

export default TomboMourn;
