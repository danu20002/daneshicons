import React from 'react';

export const iconData = {
  "id": "NasoFigure",
  "name": "NasoFigure",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.39 2.89 L 7.13 13.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 20.86 L 11.12 9.14 L 4.93 9.63 L 8.43 9.90 L 14.04 5.63"
      }
    ]
  ]
};

export const NasoFigure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.39 2.89 L 7.13 13.61" />
      <path d="M 8.42 20.86 L 11.12 9.14 L 4.93 9.63 L 8.43 9.90 L 14.04 5.63" />
      {children}
    </svg>
  );
});

export default NasoFigure;
