const container = document.querySelector('.container');
const allPanels = document.querySelectorAll('.panel');
function removeAllActiveClasses(){
    allPanels.forEach(panel =>{
        panel.classList.remove('active');
    })
}
container.addEventListener('click',(e)=>{
    const clickedPanel = e.target;
    if(clickedPanel.classList.contains('panel')){
        removeAllActiveClasses();
        clickedPanel.classList.add('active');
    }

})