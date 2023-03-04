const getWaifuButton = document.getElementById('get-waifu-btn');
const waifuContainer = document.getElementById('waifu-container');

getWaifuButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.waifu.pics/sfw/waifu');
        const data = await response.json();

        if (data.url) {
            const waifuImage = document.createElement('img');
            waifuImage.setAttribute('src', data.url);
            waifuContainer.innerHTML = '';
            waifuContainer.appendChild(waifuImage);
        } else {
            waifuContainer.innerHTML = 'No waifu found.';
        }
    } catch (error) {
        waifuContainer.innerHTML = 'An error occurred.';
        console.error(error);
    }
});