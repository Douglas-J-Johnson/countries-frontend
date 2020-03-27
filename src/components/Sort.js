import React from 'react'
import { faSortAmountUpAlt, faSortAmountDown, faSortAlphaUp, faSortAlphaDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sort({displayText, sortby, sort}) {
    let sortUp = faSortAmountUpAlt
    let sortDown = faSortAmountDown

    if(sortby === "name") {
        sortUp = faSortAlphaUp
        sortDown = faSortAlphaDownAlt
    }

    return (
        <div className="Sort">
            <label className="SortName">{displayText}</label>
            <div className="SortButtons">
                <FontAwesomeIcon  icon={sortUp}
                    className="SortButton"
                    data-sortby={sortby}
                    data-sortorder="ascending" 
                    onClick={sort}
                />
                <FontAwesomeIcon  icon={sortDown}
                    className="SortButton"
                    data-sortby={sortby}
                    data-sortorder="descending" 
                    onClick={sort}
                />
            </div>
        </div>
    )
}

/*<img className="SortButton"
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9k
T1Iw0AcxV9TRZFKETuoOGSoThZERRy1CkWoEGqFVh1MLv2CJg1Jiouj4Fpw8GOx6uDirKuDqyAIfoA4OTopukiJ/0sKLWI8OO7Hu3uPu
3eAUC8zzeoYBzTdNlOJuJjJropdrwhiEGEAfTKzjDlJSsJ3fN0jwNe7GM/yP/fn6FVzFgMCIvEsM0ybeIN4etM2OO8TR1hRVonPicdMu
iDxI9cVj984F1wWeGbETKfmiSPEYqGNlTZmRVMjniKOqppO+ULGY5XzFmetXGXNe/IXhnL6yjLXaQ4jgUUsQYIIBVWUUIaNGK06KRZSt
B/38Q+5folcCrlKYORYQAUaZNcP/ge/u7XykxNeUigOdL44zscI0LULNGqO833sOI0TIPgMXOktf6UOzHySXmtp0SMgvA1cXLc0ZQ+43
AEGngzZlF0pSFPI54H3M/qmLNB/C/Sseb0193H6AKSpq+QNcHAIjBYoe93n3d3tvf17ptnfDwBVcnlKwN1tAAAACXBIWXMAAA3XAAAN1
wFCKJt4AAAAB3RJTUUH5AMZDwEO3k/KigAAAVhJREFUaN7tmL1KxEAURs8uloHgA22vFoJYiq/iC/gO1r6FgoVb+ABWCiooLtht2thEG
caZcWYycW7kfpAmyYR78vMddkGj0Wg0lXIKbIDe2h6B/TmBdA6Ir+254lzHwAfwDhzGLNgKBXk15niJWXACvDkgHoC9iiD2PMEsBL/yf
cqsy//SWAoiEcTnkdl5pYuAqFHHSa21jDlpLvF5pLZX1CNavwpSySPivdJlQPyFV9QjqU9jaq+oR7R+M7MYWu8I2Mmc/QBY1b6J58b7f
w00Cd9IA1wZx84Y4ZGxXnmy1t9YMD6QZjjXPHY/1iNjvHLpWG/CuEBcED1wAeH/taYEaYF1AMbe74NYD9fK9kgJr4RgYvZ9Q0hIC9xm3
Lg7YFeaBlJhREKkwoiGiIUJQpTySCnH+Arg1w+7mxiiRDVHtdNWIIgJE12xpTwyxW+XVpInNBqNRvMjnzsbuXnIN8ybAAAAAElFTkSuQmCC"
alt="Sort Ascending"
data-sortby={sortby} 
data-sortorder="ascending" 
onClick={sort}>
</img>
<img className="SortButton"
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9k
T1Iw0AcxV9TRZFKBwt+4JChOlkQFXHUKhShQqgVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497
t4BQr3MNKtjHNB020wl4mImuyp2vSKIQYQhoF9mljEnSUn4jq97BPh6F+NZ/uf+HL1qzmJAQCSeZYZpE28QT2/aBud94ggryirxOfGYS
RckfuS64vEb54LLAs+MmOnUPHGEWCy0sdLGrGhqxFPEUVXTKV/IeKxy3uKslauseU/+wlBOX1nmOs1hJLCIJUgQoaCKEsqwEaNVJ8VCi
vbjPv4h1y+RSyFXCYwcC6hAg+z6wf/gd7dWfnLCSwrFgc4Xx/kYAbp2gUbNcb6PHadxAgSfgSu95a/UgZlP0mstLXoEhLeBi+uWpuwBl
zvAwJMhm7IrBWkK+TzwfkbflAX6boGeNa+35j5OH4A0dZW8AQ4OgdECZa/7vLu7vbd/zzT7+wEUQXKB6XXDSAAAAAlwSFlzAAAN1wAAD
dcBQiibeAAAAAd0SU1FB+QDGQ8COtTWbfwAAAFXSURBVGje7ZixSsRAEIa/OywDwQe6Xi0EsRRf5V7Ad7D2LRQsvMIHsFIwB4qC3V0bm
yhLyMaZsHs7J/NDmiS77Bcy87ELHo/H4ymUS+ATaDNeL8BxbpBtZoifq1Gu6xz4Aj6AU8mAjVGQt2DsWjLgAnjPDPEMHClB+nOMZma4d
lvNWuf/pWM5iEWQVB7ZiSt25ZEmcbGLu9Zc8tK+JJVHprjCPeLt10H2wCPFvZHSI03mYnePlPSGe8Tbb6LMuq53BhxMXPsJsCj9Ea+C/
/8OqBQ1UgG3wbOl5lwrtTdee/Pf92BiIFX3bvjsSeuRlN64GZg/hBkCGYJogWvtuVZKkBpYjcD078cgVt1cYo/k8MYYjOTeL4SF1MDDB
CE/AofWNKCFMQmhhTENIYUZhYh5pNR+I9YA/izsbaH9hgZG1J02BkFCGHGLjXkk935DClPj8Xg8Hqv5BsBBsYEBm2lkAAAAAElFTkSuQmCC"
alt="Sort Descending"
data-sortby={sortby} 
data-sortorder="descending" 
onClick={sort}>
</img>*/