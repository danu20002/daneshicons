import React from 'react';

export const iconData = {
  id: "TowerControl",
  name: "TowerControl",
  category: "T",
  nodes: [["path",{"d":"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{"d":"M8 13v9"}],["path",{"d":"M16 22v-9"}],["path",{"d":"m9 6 1 7"}],["path",{"d":"m15 6-1 7"}],["path",{"d":"M12 6V2"}],["path",{"d":"M13 2h-2"}]]
};

export const TowerControl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
      <path d="M8 13v9" />
      <path d="M16 22v-9" />
      <path d="m9 6 1 7" />
      <path d="m15 6-1 7" />
      <path d="M12 6V2" />
      <path d="M13 2h-2" />
      {children}
    </svg>
  );
});

export default TowerControl;
