import { Item } from './Item';

export const List = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                < Item item={item} key={item.id} />
            ))}
        </ul>
    )
}