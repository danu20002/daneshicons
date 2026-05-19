import React from 'react';

export const iconData = {
  "id": "QuinWilt",
  "name": "QuinWilt",
  "category": "IV",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.81"
      }
    ]
  ]
};

export const QuinWilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.93" />
      <circle cx="6.00" cy="10.00" r="1.07" />
      <circle cx="6.00" cy="14.00" r="0.61" />
      <circle cx="6.00" cy="18.00" r="0.52" />
      <circle cx="10.00" cy="6.00" r="0.33" />
      <circle cx="10.00" cy="10.00" r="0.68" />
      <circle cx="10.00" cy="14.00" r="1.01" />
      <circle cx="10.00" cy="18.00" r="0.63" />
      <circle cx="14.00" cy="6.00" r="0.96" />
      <circle cx="14.00" cy="10.00" r="0.97" />
      <circle cx="14.00" cy="14.00" r="0.53" />
      <circle cx="14.00" cy="18.00" r="0.73" />
      <circle cx="18.00" cy="6.00" r="0.68" />
      <circle cx="18.00" cy="10.00" r="0.75" />
      <circle cx="18.00" cy="14.00" r="1.02" />
      <circle cx="18.00" cy="18.00" r="0.81" />
      {children}
    </svg>
  );
});

export default QuinWilt;
