import React from 'react';

export const iconData = {
  "id": "PantoSerene",
  "name": "PantoSerene",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.09 6.88 L 19.91 6.88 L 19.91 17.12 L 4.09 17.12 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.09 6.88 L 7.52 3.45 L 23.34 3.45 L 19.91 6.88"
      }
    ],
    [
      "path",
      {
        "d": "M 19.91 6.88 L 23.34 3.45 L 23.34 13.69 L 19.91 17.12"
      }
    ]
  ]
};

export const PantoSerene = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.09 6.88 L 19.91 6.88 L 19.91 17.12 L 4.09 17.12 Z" />
      <path d="M 4.09 6.88 L 7.52 3.45 L 23.34 3.45 L 19.91 6.88" />
      <path d="M 19.91 6.88 L 23.34 3.45 L 23.34 13.69 L 19.91 17.12" />
      {children}
    </svg>
  );
});

export default PantoSerene;
