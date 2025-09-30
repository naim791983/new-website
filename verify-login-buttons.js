// Verification Script for Login Page Buttons
// This script checks that all buttons on the Login page are properly functional

document.addEventListener('DOMContentLoaded', function() {
    console.log('Starting Login Buttons Verification...');
    
    // Run verification tests
    verifyButtonFunctionality();
    verifyEventListeners();
    
    console.log('Login Buttons Verification Complete');
});

// Verify button functionality
function verifyButtonFunctionality() {
    console.log('Verifying button functionality...');
    
    // Test specific buttons
    const loginBtn = document.getElementById('loginBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const ctaLoginBtn = document.getElementById('ctaLoginBtn');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    
    let functionalityIssues = 0;
    
    // Test login button
    if (loginBtn) {
        console.log('✓ Login button found');
    } else {
        console.warn('Login button not found');
        functionalityIssues++;
    }
    
    // Test get started button
    if (getStartedBtn) {
        console.log('✓ Get Started button found');
    } else {
        console.warn('Get Started button not found');
        functionalityIssues++;
    }
    
    // Test CTA login button
    if (ctaLoginBtn) {
        console.log('✓ CTA Login button found');
    } else {
        console.warn('CTA Login button not found');
        functionalityIssues++;
    }
    
    // Test close modal button
    if (closeModal) {
        console.log('✓ Close modal button found');
    } else {
        console.warn('Close modal button not found');
        functionalityIssues++;
    }
    
    // Test login form
    if (loginForm) {
        console.log('✓ Login form found');
    } else {
        console.warn('Login form not found');
        functionalityIssues++;
    }
    
    if (functionalityIssues === 0) {
        console.log('✓ All button elements verified');
    } else {
        console.log(`⚠ ${functionalityIssues} functionality issues found`);
    }
}

// Verify event listeners
function verifyEventListeners() {
    console.log('Verifying event listeners...');
    
    // Test specific buttons
    const loginBtn = document.getElementById('loginBtn');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    
    let eventListenerIssues = 0;
    
    // Test login button event listener
    if (loginBtn) {
        const eventListeners = getEventListeners(loginBtn);
        if (eventListeners && eventListeners.click && eventListeners.click.length > 0) {
            console.log('✓ Login button has click event listener');
        } else {
            console.warn('Login button missing click event listener');
            eventListenerIssues++;
        }
    }
    
    // Test close modal button event listener
    if (closeModal) {
        const eventListeners = getEventListeners(closeModal);
        if (eventListeners && eventListeners.click && eventListeners.click.length > 0) {
            console.log('✓ Close modal button has click event listener');
        } else {
            console.warn('Close modal button missing click event listener');
            eventListenerIssues++;
        }
    }
    
    // Test login form event listener
    if (loginForm) {
        const eventListeners = getEventListeners(loginForm);
        if (eventListeners && eventListeners.submit && eventListeners.submit.length > 0) {
            console.log('✓ Login form has submit event listener');
        } else {
            console.warn('Login form missing submit event listener');
            eventListenerIssues++;
        }
    }
    
    if (eventListenerIssues === 0) {
        console.log('✓ All event listeners verified');
    } else {
        console.log(`⚠ ${eventListenerIssues} event listener issues found`);
    }
}

// Helper function to get event listeners (simplified version)
function getEventListeners(element) {
    // In a real implementation, this would use browser dev tools API
    // For now, we'll just check if the element has event listeners by checking for onclick/onsubmit
    const listeners = {};
    
    if (element.onclick) {
        listeners.click = [element.onclick];
    }
    
    if (element.onsubmit) {
        listeners.submit = [element.onsubmit];
    }
    
    return Object.keys(listeners).length > 0 ? listeners : null;
}

// Export for global access
window.LoginButtonsVerification = {
    verifyButtonFunctionality,
    verifyEventListeners
};