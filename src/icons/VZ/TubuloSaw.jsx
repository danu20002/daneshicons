import React from 'react';

export const iconData = {
  "id": "TubuloSaw",
  "name": "TubuloSaw",
  "category": "VZ",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.49"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.45"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.73"
      }
    ]
  ]
};

export const TubuloSaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.49" />
      <circle cx="5.60" cy="8.80" r="0.53" />
      <circle cx="5.60" cy="12.00" r="0.36" />
      <circle cx="5.60" cy="15.20" r="0.60" />
      <circle cx="5.60" cy="18.40" r="0.82" />
      <circle cx="8.80" cy="5.60" r="0.45" />
      <circle cx="8.80" cy="8.80" r="0.95" />
      <circle cx="8.80" cy="12.00" r="0.32" />
      <circle cx="8.80" cy="15.20" r="0.93" />
      <circle cx="8.80" cy="18.40" r="0.45" />
      <circle cx="12.00" cy="5.60" r="0.78" />
      <circle cx="12.00" cy="8.80" r="0.59" />
      <circle cx="12.00" cy="12.00" r="0.63" />
      <circle cx="12.00" cy="15.20" r="0.83" />
      <circle cx="12.00" cy="18.40" r="0.81" />
      <circle cx="15.20" cy="5.60" r="0.52" />
      <circle cx="15.20" cy="8.80" r="0.92" />
      <circle cx="15.20" cy="12.00" r="0.40" />
      <circle cx="15.20" cy="15.20" r="0.94" />
      <circle cx="15.20" cy="18.40" r="0.47" />
      <circle cx="18.40" cy="5.60" r="0.52" />
      <circle cx="18.40" cy="8.80" r="0.54" />
      <circle cx="18.40" cy="12.00" r="0.75" />
      <circle cx="18.40" cy="15.20" r="0.59" />
      <circle cx="18.40" cy="18.40" r="0.73" />
      {children}
    </svg>
  );
});

export default TubuloSaw;
