import { getMainData } from './api.js';

const cName = document.querySelector('#companyName');
const cMcap = document.querySelector('#companyMcap');
const cShares = document.querySelector('#companyShares');
const cIndustry = document.querySelector('#companyIndustry');
const cEPS = document.querySelector('#companyEPS');
const cPE = document.querySelector('#companyPE');

const tickerForm = document.querySelector('#tickerForm');
const tickerInput = document.querySelector('#tickerInput');
const tickerSubmit = document.querySelector('#tickerSubmit')

const stockWidgetContainer = document.querySelector('.stockWidget');

const renderMainData = (data) => {

}

const renderChart = (ticker) => {
    // Get the widget container
    const widgetContainer = document.querySelector('.tradingview-widget-container');
    
    // Remove the old script
    const oldScript = document.querySelector('#tradingview-widget-script');
    if (oldScript) {
        oldScript.remove();
    }
    
    // Create new script
    const newScript = document.createElement('script');
    newScript.id = 'tradingview-widget-script';
    newScript.type = 'text/javascript';
    newScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    newScript.async = true;
    newScript.innerHTML = JSON.stringify({
        "symbol": ticker,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": true,
        "largeChartUrl": "",
        "chartOnly": false
    });
    
    // Add the new script to the container
    widgetContainer.appendChild(newScript);
}

const render = async () => {

}

tickerForm.addEventListener('submit', event => {
    event.preventDefault();
	
    const value = tickerInput.value.toUpperCase();
    console.log(value);
    renderChart(value);
});








