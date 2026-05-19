import React from 'react';

export const iconData = {
  "id": "QuiloMembrane",
  "name": "QuiloMembrane",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 9.35 0 1 0 18.70 0 a 9.35 9.35 0 1 0 -18.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 7.32 a 8.10 2.4298104193851175 0 1 0 16.20 0 a 8.10 2.4298104193851175 0 1 0 -16.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 2.8057033994235097 0 1 0 18.70 0 a 9.35 2.8057033994235097 0 1 0 -18.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 16.68 a 8.10 2.4298104193851175 0 1 0 16.20 0 a 8.10 2.4298104193851175 0 1 0 -16.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 5.39 A 2 2 0 0 0 18.61 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 5.39 A 2 2 0 0 1 18.61 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.65 A 2 2 0 0 0 12.00 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.65 A 2 2 0 0 1 12.00 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 5.39 A 2 2 0 0 0 5.39 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 5.39 A 2 2 0 0 1 5.39 18.61"
      }
    ]
  ]
};

export const QuiloMembrane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.65 12.00 a 9.35 9.35 0 1 0 18.70 0 a 9.35 9.35 0 1 0 -18.70 0" />
      <path d="M 3.90 7.32 a 8.10 2.4298104193851175 0 1 0 16.20 0 a 8.10 2.4298104193851175 0 1 0 -16.20 0" />
      <path d="M 2.65 12.00 a 9.35 2.8057033994235097 0 1 0 18.70 0 a 9.35 2.8057033994235097 0 1 0 -18.70 0" />
      <path d="M 3.90 16.68 a 8.10 2.4298104193851175 0 1 0 16.20 0 a 8.10 2.4298104193851175 0 1 0 -16.20 0" />
      <path d="M 18.61 5.39 A 2 2 0 0 0 18.61 18.61" />
      <path d="M 18.61 5.39 A 2 2 0 0 1 18.61 18.61" />
      <path d="M 12.00 2.65 A 2 2 0 0 0 12.00 21.35" />
      <path d="M 12.00 2.65 A 2 2 0 0 1 12.00 21.35" />
      <path d="M 5.39 5.39 A 2 2 0 0 0 5.39 18.61" />
      <path d="M 5.39 5.39 A 2 2 0 0 1 5.39 18.61" />
      {children}
    </svg>
  );
});

export default QuiloMembrane;
