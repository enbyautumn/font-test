import TextToSVG from 'https://esm.sh/text-to-svg@3.1.5?dev';

const attributes = {fill: 'white', stroke: 'black', 'stroke-width': '.75'};
const options = {x: 0, y: 0, fontSize: 16, anchor: 'top', attributes: attributes};

const text = "i heard you like that impact font"

const output = document.getElementById('output');
const textOutput = document.getElementById('output2');
const input = document.getElementById('input');

TextToSVG.load('impact.otf', function(err, textToSVG) {
    input.addEventListener('input', (e) => {
        console.log(e)
        let text = input.value;    
        const svg = textToSVG.getSVG(text, options);
        // console.log(svg);

        let widthRE = /width="(.+?)"/;
        let heightRE = /height="(.+?)"/;
        let width = widthRE.exec(svg);
        let height = heightRE.exec(svg);

        let newSVG = svg.replace(/width="(.+?)"/, `width="${parseFloat(width[1]) + 1}"`).replace(/height="(.+?)"/, `height="${parseFloat(height[1])}"`)

        let wrapper = document.createElement('div');
        wrapper.innerHTML = newSVG;
        // document.body.appendChild(wrapper.firstChild);

        let dataURI = 'data:image/svg+xml;base64,' + btoa(newSVG);
        // let img = document.createElement('img');
        output.src = dataURI;
        // document.body.appendChild(img);

        let metrics = textToSVG.getMetrics(text, options);
        console.log(metrics.width / metrics.height); // aspect-ratio:
        
        //  <span style="font-size: 1.5rem;">i heard you all like <span style="height: 1.3em; display: inline-block; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYuNzM0Mzc1IiBoZWlnaHQ9IjE5LjUxNTYyNSI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTE1LjczNDM3NSIgaGVpZ2h0PSIxOS41MTU2MjUiPjxwYXRoIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9Ii4wNWVtIiBkPSJNNy4yOCAzLjQ5TDAuMDkgMy40OUwwLjA5IDYuMDJMMi4wNCA2LjAyTDIuMDQgMTYuMTRMNS4zMyAxNi4xNEw1LjMzIDYuMDJMNy4yOCA2LjAyWk0xNS41OSAzLjQ5TDEyLjMwIDMuNDlMMTIuMzAgOC4wMkwxMS4zMiA4LjAyTDExLjMyIDMuNDlMOC4wMyAzLjQ5TDguMDMgMTYuMTRMMTEuMzIgMTYuMTRMMTEuMzIgMTAuODNMMTIuMzAgMTAuODNMMTIuMzAgMTYuMTRMMTUuNTkgMTYuMTRaTTIyLjU5IDMuNDlMMTcuODQgMy40OUwxNi4xNiAxNi4xNEwxOS41NyAxNi4xNEwxOS43NyAxMy44N0wyMC45NSAxMy44N0wyMS4xMSAxNi4xNEwyNC40OCAxNi4xNFpNMjAuODUgMTEuNjNMMTkuNzMgMTEuNjNDMTkuODEgMTAuNTEgMjAuMDIgOC43NCAyMC4zNSA2LjMyQzIwLjUyIDguNDIgMjAuNjggMTAuMTkgMjAuODUgMTEuNjNaTTMwLjc4IDMuNDlMMjMuNTkgMy40OUwyMy41OSA2LjAyTDI1LjU0IDYuMDJMMjUuNTQgMTYuMTRMMjguODMgMTYuMTRMMjguODMgNi4wMkwzMC43OCA2LjAyWk0zNy42NCAzLjQ5TDM0LjM1IDMuNDlMMzQuMzUgMTYuMTRMMzcuNjQgMTYuMTRaTTQ5LjExIDMuNDlMNDQuODIgMy40OUw0NC4wNyA5LjQwTDQzLjYyIDYuMThDNDMuNDggNS4xNSA0My4zNCA0LjI1IDQzLjIyIDMuNDlMMzguOTYgMy40OUwzOC45NiAxNi4xNEw0MS44NCAxNi4xNEw0MS44NCA3LjgwTDQzLjA1IDE2LjE0TDQ1LjA5IDE2LjE0TDQ2LjIzIDcuNjBMNDYuMjMgMTYuMTRMNDkuMTEgMTYuMTRaTTUwLjQzIDMuNDlMNTAuNDMgMTYuMTRMNTMuNzIgMTYuMTRMNTMuNzIgMTEuMDVMNTQuNjAgMTEuMDVDNTUuMzIgMTEuMDUgNTUuOTAgMTAuOTUgNTYuMzUgMTAuNzVDNTYuNzkgMTAuNTUgNTcuMTAgMTAuMjcgNTcuMjcgOS45MEM1Ny40MyA5LjUzIDU3LjUyIDguOTQgNTcuNTIgOC4xM0w1Ny41MiA3LjAzQzU3LjUyIDYuMjQgNTcuNDcgNS42NSA1Ny4zOSA1LjI4QzU3LjMwIDQuOTAgNTcuMTQgNC41OCA1Ni44OSA0LjMxQzU2LjY1IDQuMDUgNTYuMjkgMy44NCA1NS44MSAzLjcwQzU1LjMzIDMuNTYgNTQuNjQgMy40OSA1My43NCAzLjQ5Wk01My43MiA1LjY2QzU0LjE1IDUuNjYgNTQuNDMgNS43MiA1NC41NiA1Ljg1QzU0LjcwIDUuOTggNTQuNzcgNi4yNiA1NC43NyA2LjcwTDU0Ljc3IDcuNzNDNTQuNzcgOC4yMCA1NC43MSA4LjUxIDU0LjU5IDguNjZDNTQuNDcgOC44MSA1NC4yNiA4Ljg4IDUzLjk2IDguODhDNTMuODkgOC44OCA1My44MSA4Ljg4IDUzLjcyIDguODhaTTYzLjc0IDMuNDlMNTguOTggMy40OUw1Ny4zMSAxNi4xNEw2MC43MiAxNi4xNEw2MC45MSAxMy44N0w2Mi4wOSAxMy44N0w2Mi4yNiAxNi4xNEw2NS42MyAxNi4xNFpNNjIgMTEuNjNMNjAuODggMTEuNjNDNjAuOTYgMTAuNTEgNjEuMTcgOC43NCA2MS41MCA2LjMyQzYxLjY3IDguNDIgNjEuODMgMTAuMTkgNjIgMTEuNjNaTTczLjg3IDkuMDFMNzMuODcgNy44MEM3My44NyA2LjYyIDczLjc3IDUuNzUgNzMuNTcgNS4xOUM3My4zNyA0LjYzIDcyLjk2IDQuMTYgNzIuMzMgMy43OUM3MS43MCAzLjQxIDcwLjkwIDMuMjMgNjkuOTMgMy4yM0M2OS4yMiAzLjIzIDY4LjU4IDMuMzUgNjguMDQgMy41OUM2Ny40OSAzLjgzIDY3LjA2IDQuMTYgNjYuNzUgNC41OUM2Ni40NCA1LjAxIDY2LjI1IDUuNDUgNjYuMTkgNS45MEM2Ni4xMyA2LjM2IDY2LjA5IDcuMDQgNjYuMDkgNy45NUw2Ni4wOSAxMS42NUM2Ni4wOSAxMi44OSA2Ni4yMCAxMy44MiA2Ni40MCAxNC40M0M2Ni42MCAxNS4wNSA2Ny4wMiAxNS41MyA2Ny42NCAxNS44OEM2OC4yNyAxNi4yMyA2OS4wNiAxNi40MSA3MC4wMiAxNi40MUM3MC45NSAxNi40MSA3MS43MyAxNi4yMCA3Mi4zNiAxNS43OUM3My4wMCAxNS4zOCA3My40MCAxNC45MCA3My41OSAxNC4zNUM3My43NyAxMy44MCA3My44NyAxMi44OCA3My44NyAxMS41N0w3My44NyAxMS4wOEw3MC41OCAxMS4wOEw3MC41OCAxMi42NkM3MC41OCAxMy4zNiA3MC41NCAxMy44MCA3MC40NiAxMy45OEM3MC4zOSAxNC4xNyA3MC4yMyAxNC4yNyA2OS45OCAxNC4yN0M2OS43MyAxNC4yNyA2OS41NyAxNC4xNyA2OS40OSAxMy45OEM2OS40MiAxMy44MCA2OS4zOCAxMy40MCA2OS4zOCAxMi43OEw2OS4zOCA2LjkxQzY5LjM4IDYuMjcgNjkuNDIgNS44NSA2OS40OSA1LjY2QzY5LjU3IDUuNDYgNjkuNzQgNS4zNyA3MC4wMSA1LjM3QzcwLjI1IDUuMzcgNzAuNDAgNS40NSA3MC40NyA1LjYxQzcwLjU0IDUuNzYgNzAuNTggNi4xNiA3MC41OCA2LjgwTDcwLjU4IDkuMDFaTTgxLjY3IDMuNDlMNzQuNDggMy40OUw3NC40OCA2LjAyTDc2LjQzIDYuMDJMNzYuNDMgMTYuMTRMNzkuNzIgMTYuMTRMNzkuNzIgNi4wMkw4MS42NyA2LjAyWk04NS4yNCAzLjQ5TDg1LjI0IDE2LjE0TDg4LjUzIDE2LjE0TDg4LjUzIDEwLjgzTDkwLjU2IDEwLjgzTDkwLjU2IDguNDJMODguNTMgOC40Mkw4OC41MyA2LjAyTDkwLjgxIDYuMDJMOTAuODEgMy40OVpNOTkuMTMgMTAuOTBMOTkuMTMgOC43M0M5OS4xMyA3LjQzIDk5LjA5IDYuNTIgOTkuMDMgNkM5OC45NyA1LjQ4IDk4Ljc3IDUuMDAgOTguNDUgNC41NUM5OC4xMiA0LjExIDk3LjY4IDMuNzggOTcuMTQgMy41NkM5Ni42MSAzLjM0IDk2LjAwIDMuMjMgOTUuMzIgMy4yM0M5NC42MSAzLjIzIDkzLjk4IDMuMzQgOTMuNDUgMy41OEM5Mi45MSAzLjgxIDkyLjQ4IDQuMTUgOTIuMTcgNC41OUM5MS44NSA1LjAyIDkxLjY3IDUuNTEgOTEuNjEgNi4wNEM5MS41NSA2LjU2IDkxLjUyIDcuNDYgOTEuNTIgOC43M0w5MS41MiAxMC45MEM5MS41MiAxMi4yMCA5MS41NSAxMy4xMSA5MS42MSAxMy42M0M5MS42NyAxNC4xNSA5MS44NyAxNC42NCA5Mi4yMCAxNS4wOEM5Mi41MiAxNS41MiA5Mi45NiAxNS44NSA5My41MCAxNi4wN0M5NC4wNCAxNi4zMCA5NC42NCAxNi40MSA5NS4zMiAxNi40MUM5Ni4wMyAxNi40MSA5Ni42NiAxNi4yOSA5Ny4yMCAxNi4wNUM5Ny43MyAxNS44MiA5OC4xNiAxNS40OCA5OC40NyAxNS4wNUM5OC43OSAxNC42MSA5OC45OCAxNC4xMyA5OS4wNCAxMy42MEM5OS4xMCAxMy4wNyA5OS4xMyAxMi4xNyA5OS4xMyAxMC45MFpNOTUuODQgNi43NEw5NS44NCAxMi41NUM5NS44NCAxMy4zMCA5NS44MCAxMy43NyA5NS43NCAxMy45N0M5NS42OCAxNC4xNyA5NS41NCAxNC4yNyA5NS4zMSAxNC4yN0M5NS4wOSAxNC4yNyA5NC45NSAxNC4xOCA5NC44OSAxNC4wMUM5NC44MyAxMy44NCA5NC44MCAxMy4zOCA5NC44MCAxMi42NUw5NC44MCA2Ljc0Qzk0LjgwIDYuMDkgOTQuODUgNS43MCA5NC45NCA1LjU3Qzk1LjAzIDUuNDMgOTUuMTYgNS4zNyA5NS4zNCA1LjM3Qzk1LjU0IDUuMzcgOTUuNjcgNS40NSA5NS43NCA1LjYxQzk1LjgwIDUuNzggOTUuODQgNi4xNSA5NS44NCA2Ljc0Wk0xMDcuNzAgMy40OUwxMDQuOTUgMy40OUwxMDQuOTUgOS4xOUwxMDMuMTAgMy40OUwxMDAuMzUgMy40OUwxMDAuMzUgMTYuMTRMMTAzLjEwIDE2LjE0TDEwMy4xMCAxMC4zOUwxMDQuODEgMTYuMTRMMTA3LjcwIDE2LjE0Wk0xMTUuNjQgMy40OUwxMDguNDUgMy40OUwxMDguNDUgNi4wMkwxMTAuNDAgNi4wMkwxMTAuNDAgMTYuMTRMMTEzLjY5IDE2LjE0TDExMy42OSA2LjAyTDExNS42NCA2LjAyWiIvPjwvc3ZnPjwvc3ZnPg==&quot;); aspect-ratio: 5.93034 / 1; background-size: contain; background-position: left bottom; background-repeat: no-repeat; background-clip: border-box; transform: translateY(0.23em);"></span></span>

        // let out = `<span style="height: 1.3em; display: inline-block; background-image: url('${dataURI}'); aspect-ratio: ${metrics.width / metrics.height}; background-size: contain; background-repeat: no-repeat; background-position: left bottom; transform: translateY(.23em);"></span>`
        let out = `<span style="position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space: nowrap">${text}</span><span aria-hidden="true" style="height: 2.6em; display: inline-block; background-image: url('${dataURI}'); aspect-ratio: ${metrics.width / metrics.height}; background-size: contain; background-repeat: no-repeat; background-position: left bottom; transform: translateY(.23em);"></span>`
        console.log(out)

        textOutput.value = out;


        // console.log(newSVG);
    })
})

const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(textOutput.value).then(
        () => {
            copyButton.innerText = 'Copied!';
            setTimeout(() => {
                copyButton.innerText = 'Copy';
            }, 1000);
            /* clipboard successfully set */
          },
          () => {
            copyButton.innerText = 'Error Copying!';
            setTimeout(() => {
                copyButton.innerText = 'Copy';
            }, 1000);
            /* clipboard write failed */
          }        
    )

})

console.log(TextToSVG)

console.log('meow')
