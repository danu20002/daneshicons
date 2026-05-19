import React from 'react';

export const iconData = {
  "id": "XerofiloOutwit",
  "name": "XerofiloOutwit",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.96 12.00 a 9.04 9.04 0 1 0 18.08 0 a 9.04 9.04 0 1 0 -18.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 7.48 a 7.83 2.348576286065687 0 1 0 15.66 0 a 7.83 2.348576286065687 0 1 0 -15.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.96 12.00 a 9.04 2.711902301944792 0 1 0 18.08 0 a 9.04 2.711902301944792 0 1 0 -18.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 16.52 a 7.83 2.348576286065687 0 1 0 15.66 0 a 7.83 2.348576286065687 0 1 0 -15.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.96 A 2 2 0 0 0 12.00 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.96 A 2 2 0 0 1 12.00 21.04"
      }
    ]
  ]
};

export const XerofiloOutwit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.96 12.00 a 9.04 9.04 0 1 0 18.08 0 a 9.04 9.04 0 1 0 -18.08 0" />
      <path d="M 4.17 7.48 a 7.83 2.348576286065687 0 1 0 15.66 0 a 7.83 2.348576286065687 0 1 0 -15.66 0" />
      <path d="M 2.96 12.00 a 9.04 2.711902301944792 0 1 0 18.08 0 a 9.04 2.711902301944792 0 1 0 -18.08 0" />
      <path d="M 4.17 16.52 a 7.83 2.348576286065687 0 1 0 15.66 0 a 7.83 2.348576286065687 0 1 0 -15.66 0" />
      <path d="M 12.00 2.96 A 2 2 0 0 0 12.00 21.04" />
      <path d="M 12.00 2.96 A 2 2 0 0 1 12.00 21.04" />
      {children}
    </svg>
  );
});

export default XerofiloOutwit;
