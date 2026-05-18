import React from 'react';

export const iconData = {
  id: "Calendars",
  name: "Calendars",
  category: "C",
  nodes: [["path",{"d":"M12 2v2"}],["path",{"d":"M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2"}],["path",{"d":"M18 2v2"}],["path",{"d":"M2 13h2"}],["path",{"d":"M8 8h14"}],["rect",{"x":"8","y":"3","width":"14","height":"14","rx":"2"}]]
};

export const Calendars = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 2v2" />
      <path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" />
      <path d="M18 2v2" />
      <path d="M2 13h2" />
      <path d="M8 8h14" />
      <rect x="8" y="3" width="14" height="14" rx="2" />
      {children}
    </svg>
  );
});

export default Calendars;
