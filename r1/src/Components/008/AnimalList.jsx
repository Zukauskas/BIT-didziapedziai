export function AnimalList({ animal, index }) {
    return (
        <li className="list-group-item" style={{ backgroundColor: index % 2 === 0 ? '#eee' : '#ddd' }}>
            <div className="list-bin">
                <i>#{animal.id}</i>
                <span style={{ color: animal.color, fontWeight: animal.bold ? 'bold' : null }}>{animal.animal}</span>
            </div>
        </li>
    );
}
