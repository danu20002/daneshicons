import React from 'react';

export const iconData = {
  "id": "SomaFennel",
  "name": "SomaFennel",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 14.47 Q 21.61 4.72 20.43 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 4.45 L 13.68 2.29"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 11.05 Q 4.41 10.12 13.54 8.08"
      }
    ]
  ]
};

export const SomaFennel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 14.47 Q 21.61 4.72 20.43 18.04" />
      <path d="M 18.52 4.45 L 13.68 2.29" />
      <path d="M 18.47 11.05 Q 4.41 10.12 13.54 8.08" />
      {children}
    </svg>
  );
});

export default SomaFennel;
