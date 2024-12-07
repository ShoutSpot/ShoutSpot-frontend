import { textColorPalatee } from "../../../globals/globals"
import { ColorPalatee } from "../../ColorPalatee"

export const ColorBox: React.FC<{activeColor: string; setActiveColor: (color: string) => void}> = ({activeColor, setActiveColor}) => {
    return (
        <>
            <div className="mt-2">
                <div className="twitter-picker" style={{ width: '312px', background: 'rgb(255, 255, 255)', border: '0px solid rgba(0, 0, 0, 0.25)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px', borderRadius: '4px', position: 'relative' }}>
                    <ColorPalatee colors={textColorPalatee} activeColor={activeColor} setActiveColor={setActiveColor} />
                </div>
            </div>

        </>
    )
}