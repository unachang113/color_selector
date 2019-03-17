import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el    : '#app',
        data: {
            baseColor: "",
            colorNum: 0
        },
        computed: {
            // 色相環の作成
            complementaryColor: function() {
                const rgb = hextoRGB(this.baseColor);
                // rgb値の最大値と最小値を求める
                let min = Math.min(rgb.r,rgb.g,rgb.b),
                    max = Math.max(rgb.r,rgb.g,rgb.b),
                    buf = 0,
                    complementaryRGB,hex;

                buf = min + max;


                // rgb値の生成
                complementaryRGB = {                
                    r: buf - rgb.r,
                    g: buf - rgb.g,
                    b: buf - rgb.b
                };

                // hex値に変換
                console.log(complementaryRGB);
                hex = RGBtohex(complementaryRGB);

                return hex;
            }
        }
    });

    function hextoRGB(color) {
        const hexValue = color.split('');
        let r, g, b;

        if (color.length === 3) {
            r = parseInt(hexValue[0].toString() + hexValue[0].toString(), 16);
            g = parseInt(hexValue[1].toString() + hexValue[1].toString(), 16);
            b = parseInt(hexValue[2].toString() + hexValue[2].toString(), 16);                    
        } 
        else if (color.length === 6) {
            r = parseInt(hexValue[0].toString() + hexValue[1].toString(), 16);
            g = parseInt(hexValue[2].toString() + hexValue[3].toString(), 16);
            b = parseInt(hexValue[4].toString() + hexValue[5].toString(), 16);
        }

        return {r: r,g: g,b: b};
    };

    function RGBtohex(color) {
        const rgbValue = color;
        let hex,r,g,b;

        r = rgbValue.r.toString(16);
        g = rgbValue.g.toString(16);
        b = rgbValue.b.toString(16);

        hex = r + g + b;

        return hex;
    };

});