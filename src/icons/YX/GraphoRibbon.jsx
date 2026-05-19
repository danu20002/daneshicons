import React from 'react';

export const iconData = {
  "id": "GraphoRibbon",
  "name": "GraphoRibbon",
  "category": "YX",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "5.33",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "8.00",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "10.67",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "13.33",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "16.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "5.33",
        "cy": "18.67",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "5.33",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "8.00",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "10.67",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "13.33",
        "r": "0.30"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "16.00",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "18.67",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "10.67",
        "cy": "5.33",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "10.67",
        "cy": "8.00",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "10.67",
        "cy": "10.67",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.67",
        "cy": "13.33",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "10.67",
        "cy": "16.00",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "10.67",
        "cy": "18.67",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "5.33",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "8.00",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "10.67",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "13.33",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "16.00",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "13.33",
        "cy": "18.67",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "5.33",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "8.00",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "10.67",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "13.33",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "16.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "16.00",
        "cy": "18.67",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "5.33",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "8.00",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "10.67",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "13.33",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "16.00",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "18.67",
        "cy": "18.67",
        "r": "1.09"
      }
    ]
  ]
};

export const GraphoRibbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.33" cy="5.33" r="0.67" />
      <circle cx="5.33" cy="8.00" r="0.53" />
      <circle cx="5.33" cy="10.67" r="0.54" />
      <circle cx="5.33" cy="13.33" r="1.05" />
      <circle cx="5.33" cy="16.00" r="0.87" />
      <circle cx="5.33" cy="18.67" r="0.90" />
      <circle cx="8.00" cy="5.33" r="0.81" />
      <circle cx="8.00" cy="8.00" r="0.52" />
      <circle cx="8.00" cy="10.67" r="0.62" />
      <circle cx="8.00" cy="13.33" r="0.30" />
      <circle cx="8.00" cy="16.00" r="0.78" />
      <circle cx="8.00" cy="18.67" r="0.61" />
      <circle cx="10.67" cy="5.33" r="0.40" />
      <circle cx="10.67" cy="8.00" r="0.58" />
      <circle cx="10.67" cy="10.67" r="0.47" />
      <circle cx="10.67" cy="13.33" r="0.90" />
      <circle cx="10.67" cy="16.00" r="0.50" />
      <circle cx="10.67" cy="18.67" r="0.39" />
      <circle cx="13.33" cy="5.33" r="0.98" />
      <circle cx="13.33" cy="8.00" r="0.83" />
      <circle cx="13.33" cy="10.67" r="0.73" />
      <circle cx="13.33" cy="13.33" r="0.76" />
      <circle cx="13.33" cy="16.00" r="0.73" />
      <circle cx="13.33" cy="18.67" r="0.90" />
      <circle cx="16.00" cy="5.33" r="0.47" />
      <circle cx="16.00" cy="8.00" r="0.67" />
      <circle cx="16.00" cy="10.67" r="0.71" />
      <circle cx="16.00" cy="13.33" r="0.50" />
      <circle cx="16.00" cy="16.00" r="0.55" />
      <circle cx="16.00" cy="18.67" r="0.45" />
      <circle cx="18.67" cy="5.33" r="0.91" />
      <circle cx="18.67" cy="8.00" r="0.35" />
      <circle cx="18.67" cy="10.67" r="0.58" />
      <circle cx="18.67" cy="13.33" r="0.97" />
      <circle cx="18.67" cy="16.00" r="1.10" />
      <circle cx="18.67" cy="18.67" r="1.09" />
      {children}
    </svg>
  );
});

export default GraphoRibbon;
