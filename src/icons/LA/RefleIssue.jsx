import React from 'react';

export const iconData = {
  "id": "RefleIssue",
  "name": "RefleIssue",
  "category": "LA",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.44"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.51"
      }
    ]
  ]
};

export const RefleIssue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.53" />
      <circle cx="6.00" cy="10.00" r="0.67" />
      <circle cx="6.00" cy="14.00" r="0.38" />
      <circle cx="6.00" cy="18.00" r="0.42" />
      <circle cx="10.00" cy="6.00" r="0.45" />
      <circle cx="10.00" cy="10.00" r="0.48" />
      <circle cx="10.00" cy="14.00" r="0.93" />
      <circle cx="10.00" cy="18.00" r="0.44" />
      <circle cx="14.00" cy="6.00" r="0.73" />
      <circle cx="14.00" cy="10.00" r="0.40" />
      <circle cx="14.00" cy="14.00" r="0.90" />
      <circle cx="14.00" cy="18.00" r="0.50" />
      <circle cx="18.00" cy="6.00" r="0.36" />
      <circle cx="18.00" cy="10.00" r="0.77" />
      <circle cx="18.00" cy="14.00" r="0.53" />
      <circle cx="18.00" cy="18.00" r="0.51" />
      {children}
    </svg>
  );
});

export default RefleIssue;
