import React from 'react';

export const iconData = {
  "id": "ZufoloQuote",
  "name": "ZufoloQuote",
  "category": "VZ",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.37"
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
        "r": "0.43"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.99"
      }
    ]
  ]
};

export const ZufoloQuote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.30" />
      <circle cx="6.00" cy="10.00" r="0.49" />
      <circle cx="6.00" cy="14.00" r="0.37" />
      <circle cx="6.00" cy="18.00" r="0.52" />
      <circle cx="10.00" cy="6.00" r="0.43" />
      <circle cx="10.00" cy="10.00" r="0.70" />
      <circle cx="10.00" cy="14.00" r="0.61" />
      <circle cx="10.00" cy="18.00" r="0.77" />
      <circle cx="14.00" cy="6.00" r="1.02" />
      <circle cx="14.00" cy="10.00" r="1.07" />
      <circle cx="14.00" cy="14.00" r="0.35" />
      <circle cx="14.00" cy="18.00" r="0.94" />
      <circle cx="18.00" cy="6.00" r="0.98" />
      <circle cx="18.00" cy="10.00" r="0.78" />
      <circle cx="18.00" cy="14.00" r="0.89" />
      <circle cx="18.00" cy="18.00" r="0.99" />
      {children}
    </svg>
  );
});

export default ZufoloQuote;
