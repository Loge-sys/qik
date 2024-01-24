interface IconArrowUpProps {
    show: string;
  }

interface HeaderProps {
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
}

  export type { IconArrowUpProps, HeaderProps }