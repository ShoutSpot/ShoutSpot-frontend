export const ColorPalatee: React.FC<{ colors: string[] }> = ({ colors }) => {
    return (
        <div style={{ padding: "15px 9px 9px 15px" }}>
            {colors.map((color: string, index: number) => {
                return <span key={index}>
                    <div title="#FF6900" className="focus:shadow focus:shadow-black" tabIndex={0} style={{ background: color, height: '30px', width: '30px', cursor: 'pointer', position: 'relative', outline: 'none', float: 'left', borderRadius: '4px', margin: '0px 6px 6px 0px' }}></div>
                </span>
            })}

            <div style={{ background: 'rgb(240, 240, 240)', height: '30px', width: '30px', borderRadius: '4px 0px 0px 4px', float: 'left', color: 'rgb(152, 161, 164)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>#</div>
            <div style={{ position: 'relative' }}>
                <input id="rc-editable-input-1" spellCheck="false" style={{ width: '100px', fontSize: '14px', color: 'rgb(102, 102, 102)', border: '0px', outline: 'none', height: '28px', boxShadow: 'rgb(240, 240, 240) 0px 0px 0px 1px inset', boxSizing: 'content-box', borderRadius: '0px 4px 4px 0px', float: 'left', paddingLeft: '8px' }} />
            </div>
            <div style={{ clear: 'both' }}></div>

        </div>
    )
}