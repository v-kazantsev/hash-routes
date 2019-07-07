export interface IItem {
  id: number,
  name: string,
  quantity: number,
  price: number,
}

export const itemsToLoad: IItem[] = [
  {id: 1, name: 'item1', quantity: 1, price: 20},
  {id: 2, name: 'item2', quantity: 5, price: 5},
  {id: 3, name: 'item3', quantity: 3, price: 30}
]
 