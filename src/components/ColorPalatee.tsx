import { useState } from "react";

export const ColorPalatee: React.FC<{ colors: string[]; activeColor: string; setActiveColor: (color: string) => void }> = ({ colors, activeColor, setActiveColor }) => {


    const [colorInput, setColorInput] = useState<string>(activeColor);

    const correctToNearestHex = (input: string): string => {
        let corrected = input.toUpperCase().replace(/[^0-9A-F]/g, '');

        corrected = corrected.split('').map((char) => {
            if (char >= '0' && char <= '9' || char >= 'A' && char <= 'F') {
                return char;
            } else if (char >= 'G' && char <= 'Z') {
                return 'F';
            } else {
                return '0';
            }
        }).join('');

        if (corrected.length < 6) {
            corrected += '0'.repeat(6 - corrected.length);
        } else if (corrected.length > 6) {
            corrected = corrected.substring(0, 6);
        }

        return corrected;
    };

    return (
        <div style={{ padding: "15px 9px 9px 15px" }}>
            {colors.map((color: string, index: number) => {
                console.log(color);
                return <span key={index}>
                    <div title="#FF6900" className="focus:shadow focus:shadow-black" tabIndex={0} style={{ background: color, height: '30px', width: '30px', cursor: 'pointer', position: 'relative', outline: 'none', float: 'left', borderRadius: '4px', margin: '0px 6px 6px 0px' }} onClick={() => {setActiveColor(color.slice(1)); setColorInput(color.slice(1))}}></div>
                </span>
            })}

            <div style={{ background: 'rgb(240, 240, 240)', height: '30px', width: '30px', borderRadius: '4px 0px 0px 4px', float: 'left', color: 'rgb(152, 161, 164)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>#</div>
            <div style={{ position: 'relative' }}>
                <input id="rc-editable-input-1" spellCheck="false" style={{ width: '100px', fontSize: '14px', color: 'rgb(102, 102, 102)', border: '0px', outline: 'none', height: '28px', boxShadow: 'rgb(240, 240, 240) 0px 0px 0px 1px inset', boxSizing: 'content-box', borderRadius: '0px 4px 4px 0px', float: 'left', paddingLeft: '8px' }} value={colorInput} onChange={(e) => { setActiveColor(correctToNearestHex(e.target.value)); setColorInput(e.target.value) }} onBlur={(e) => {setColorInput(correctToNearestHex(e.target.value)) }}/>
            </div>
            <div style={{ clear: 'both' }}></div>

        </div>
    )
}