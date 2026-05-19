import React from 'react';

export const iconData = {
  "id": "PneumoMention",
  "name": "PneumoMention",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.90 10.32 Q 4.68 11.05 11.92 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 3.72 L 3.12 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 20.90 L 7.00 13.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 2.26 L 18.17 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.41 13.45 L 18.58 4.70"
      }
    ]
  ]
};

export const PneumoMention = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.90 10.32 Q 4.68 11.05 11.92 19.07" />
      <path d="M 20.89 3.72 L 3.12 21.58" />
      <path d="M 8.60 20.90 L 7.00 13.56" />
      <path d="M 4.23 2.26 L 18.17 17.82" />
      <path d="M 15.41 13.45 L 18.58 4.70" />
      {children}
    </svg>
  );
});

export default PneumoMention;
