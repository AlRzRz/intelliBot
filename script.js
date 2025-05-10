import { getMainData } from './api.js';
import { chartFormat } from './helpers.js';

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
    // Clear the container
    stockWidgetContainer.innerHTML = '';
    
    // Create the widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container';
    
    // Create the widget element
    const widgetElement = document.createElement('div');
    widgetElement.className = 'tradingview-widget-container__widget';
    
    // Create the copyright element
    const copyrightElement = document.createElement('div');
    copyrightElement.className = 'tradingview-widget-copyright';
    copyrightElement.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a>';
    
    // Create the script element
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    scriptElement.async = true;
    scriptElement.innerHTML = JSON.stringify({
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
    
    // Assemble the widget
    widgetContainer.appendChild(widgetElement);
    widgetContainer.appendChild(copyrightElement);
    widgetContainer.appendChild(scriptElement);
    
    // Add to the page
    stockWidgetContainer.appendChild(widgetContainer);
}

const render = async () => {

}

tickerForm.addEventListener('submit', event => {
    event.preventDefault();
    const value = tickerInput.value.toUpperCase();
    console.log(value);
    renderChart(value);
});








