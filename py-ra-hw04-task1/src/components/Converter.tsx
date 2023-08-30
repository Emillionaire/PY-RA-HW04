import { useState } from "react";

const hexToRgb = (hex: any) => {
    const rgbChar = ['r', 'g', 'b'];

    if (hex === 'ОШИБКА') {
        return 'ОШИБКА'
    }
    
    const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) {
        return normal.slice(1).reduce((a: any, e: any, i: any) => { 
            a[rgbChar[i]] = parseInt(e, 16); 
            return a;
        }, {});
    }

    const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) { 
        return shorthand.slice(1).reduce((a: any, e: any, i: any) => { 
            a[rgbChar[i]] = 0x11 * parseInt(e, 16); 
            return a;
        }, {});
    }
};

const Converter = () => {
    const [color, setColor] = useState('#ffffff')

    return (
        <div className='page' style={{ backgroundColor: color }} >
            <form className="form">
                <label>
                    Color:
                    <input type='text' name='color' onChange={(target) => {
                        const { value } = target.target;
                        const regex = /^#([A-F0-9]{3}|[A-F0-9]{6})$/i;
                        const regexBroken = /^#(.{3}|.{6})$/i;
                        if (value.search(regex) === 0) {
                            setColor(value)
                        } else if (value.search(regexBroken) === 0) {
                            setColor('ОШИБКА')
                        }
                    }}/>
                    RGB:
                    <input type="text" name="colorRGB" value={`${typeof(hexToRgb(color)) === 'object' ? Object.values(hexToRgb(color)) : "ОШИБКА"}`}/>
                </label>
            </form>
        </div>
    );
};

export default Converter;
