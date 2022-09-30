const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        
        if (e.keyCode === keydownRight) {
            tabFocus++;
            if(tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        }
        else if (e.keyCode === keydownLeft) {
            tabFocus--;
            if(tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
        
        tabs[tabFocus].setAttribute('tabindex', 0);
        tabs[tabFocus].focus();
    }
});

tabList.addEventListener('click', e => {
    showActiveTab(e.target);
})

const showActiveTab = (tab) => {
    const parent = tab.parentNode;

    // Remove all currently selected tabs
    parent
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", "false");

    // Set this tab as selected
    tab.setAttribute("aria-selected", "true");
}