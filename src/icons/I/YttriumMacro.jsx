import React from 'react';

export const iconData = {
  "id": "YttriumMacro",
  "name": "YttriumMacro",
  "category": "I",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.37"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.56"
      }
    ]
  ]
};

export const YttriumMacro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.36" />
      <circle cx="6.00" cy="10.00" r="0.63" />
      <circle cx="6.00" cy="14.00" r="0.80" />
      <circle cx="6.00" cy="18.00" r="0.57" />
      <circle cx="10.00" cy="6.00" r="0.37" />
      <circle cx="10.00" cy="10.00" r="1.07" />
      <circle cx="10.00" cy="14.00" r="0.67" />
      <circle cx="10.00" cy="18.00" r="0.82" />
      <circle cx="14.00" cy="6.00" r="0.77" />
      <circle cx="14.00" cy="10.00" r="0.39" />
      <circle cx="14.00" cy="14.00" r="1.00" />
      <circle cx="14.00" cy="18.00" r="0.32" />
      <circle cx="18.00" cy="6.00" r="0.99" />
      <circle cx="18.00" cy="10.00" r="1.07" />
      <circle cx="18.00" cy="14.00" r="0.93" />
      <circle cx="18.00" cy="18.00" r="0.56" />
      {children}
    </svg>
  );
});

export default YttriumMacro;
