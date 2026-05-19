import React from 'react';

export const iconData = {
  "id": "TantoPropeller",
  "name": "TantoPropeller",
  "category": "MM",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.37"
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
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.70"
      }
    ]
  ]
};

export const TantoPropeller = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.37" />
      <circle cx="6.00" cy="10.00" r="1.07" />
      <circle cx="6.00" cy="14.00" r="0.90" />
      <circle cx="6.00" cy="18.00" r="0.58" />
      <circle cx="10.00" cy="6.00" r="1.06" />
      <circle cx="10.00" cy="10.00" r="0.99" />
      <circle cx="10.00" cy="14.00" r="0.33" />
      <circle cx="10.00" cy="18.00" r="0.70" />
      <circle cx="14.00" cy="6.00" r="0.80" />
      <circle cx="14.00" cy="10.00" r="0.87" />
      <circle cx="14.00" cy="14.00" r="0.82" />
      <circle cx="14.00" cy="18.00" r="0.87" />
      <circle cx="18.00" cy="6.00" r="0.32" />
      <circle cx="18.00" cy="10.00" r="1.09" />
      <circle cx="18.00" cy="14.00" r="0.52" />
      <circle cx="18.00" cy="18.00" r="0.70" />
      {children}
    </svg>
  );
});

export default TantoPropeller;
