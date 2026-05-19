import React from 'react';

export const iconData = {
  "id": "SocioInhale",
  "name": "SocioInhale",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.82 8.66 L 14.82 8.66"
      }
    ],
    [
      "path",
      {
        "d": "M 14.30 9.30 L 16.30 12.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 12.65 L 13.49 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 15.34 L 9.18 15.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.70 14.70 L 7.70 11.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 11.35 L 10.51 7.89"
      }
    ]
  ]
};

export const SocioInhale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.82 8.66 L 14.82 8.66" />
      <path d="M 14.30 9.30 L 16.30 12.77" />
      <path d="M 15.49 12.65 L 13.49 16.11" />
      <path d="M 13.18 15.34 L 9.18 15.34" />
      <path d="M 9.70 14.70 L 7.70 11.23" />
      <path d="M 8.51 11.35 L 10.51 7.89" />
      {children}
    </svg>
  );
});

export default SocioInhale;
