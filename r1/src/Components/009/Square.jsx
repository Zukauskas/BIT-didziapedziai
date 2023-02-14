export function Square({ sqColor, sqIndex }) {
    return (
        <div className="sq" style={{ backgroundColor: sqColor.color }}>
            {sqIndex + 1}
        </div>
    );
}
