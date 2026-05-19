import React from 'react';

export const iconData = {
  "id": "QuerciTriumph",
  "name": "QuerciTriumph",
  "category": "BN",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "1.02"
      }
    ]
  ]
};

export const QuerciTriumph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.58" />
      <circle cx="6.00" cy="10.00" r="0.47" />
      <circle cx="6.00" cy="14.00" r="0.58" />
      <circle cx="6.00" cy="18.00" r="0.54" />
      <circle cx="10.00" cy="6.00" r="0.54" />
      <circle cx="10.00" cy="10.00" r="0.36" />
      <circle cx="10.00" cy="14.00" r="0.51" />
      <circle cx="10.00" cy="18.00" r="1.05" />
      <circle cx="14.00" cy="6.00" r="0.62" />
      <circle cx="14.00" cy="10.00" r="0.84" />
      <circle cx="14.00" cy="14.00" r="0.54" />
      <circle cx="14.00" cy="18.00" r="0.64" />
      <circle cx="18.00" cy="6.00" r="0.78" />
      <circle cx="18.00" cy="10.00" r="0.31" />
      <circle cx="18.00" cy="14.00" r="0.56" />
      <circle cx="18.00" cy="18.00" r="1.02" />
      {children}
    </svg>
  );
});

export default QuerciTriumph;
