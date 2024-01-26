import { Item, Modifiers, ModifiersItems } from '../Menu/interface'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    foodDetail: Item | undefined;
  }

  interface ModalContentProps {
    hasimage: number;
  }

interface DetailModalProps {
  image?: string;
  title?: string;
  description?: string;
  modifiers?: Modifiers;
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  color: string;
  handlesize: (item: ModifiersItems) => void; // Ajuste aqui
  handleadd: React.MouseEventHandler<HTMLButtonElement>;
  firstprice: number;
  sizeprice?: number;
}

 export type { ModalProps, ModalContentProps, DetailModalProps }