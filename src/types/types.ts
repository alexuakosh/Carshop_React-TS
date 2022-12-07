export interface ProductCardProps {
    id: string,
    image: string,
    name: string,
    code: string,
    price: string,
    isFavorite: Boolean,
    addToFavorites?: (id: string) => void,
    removeFromFavorites: (id: string) => void,
    openModal: (id: string) => void,
    color?: string,
    btnColor: string,
    btnText: string
  }

export interface ModalProps {
  header: string,
  text: string,
  color: string,
  closeModal: () => void,
  actions: React.ReactElement
}

export interface ProductInterface {
  [key: string]: string,
}

export interface ButtonProps {
  color: string,
  text: string,
  func: (() => void) | ((e: any) => void)
}

