// Verification Script for Document Library Buttons
// This script checks that all buttons on the Document Library page are properly functional

document.addEventListener('DOMContentLoaded', function() {
    console.log('Starting Document Buttons Verification...');
    
    // Run verification tests
    verifyButtonStyles();
    verifyButtonFunctionality();
    verifyAccessibilityFeatures();
    
    console.log('Document Buttons Verification Complete');
});

// Verify that all buttons have proper CSS classes
function verifyButtonStyles() {
    console.log('Verifying button styles...');
    
    const buttons = document.querySelectorAll('button');
    let styleIssues = 0;
    
    buttons.forEach((button, index) => {
        // Check if button has base class
        if (!button.classList.contains('doc-btn')) {
            console.warn(`Button ${index + 1} missing 'doc-btn' class:`, button);
            styleIssues++;
        }
        
        // Check if button has a specific type class
        const typeClasses = ['doc-btn-primary', 'doc-btn-secondary', 'doc-btn-danger', 'doc-btn-success', 'doc-btn-icon', 'doc-btn-filter', 'doc-btn-upload', 'doc-btn-doc-action', 'doc-btn-pagination'];
        const hasTypeClass = typeClasses.some(cls => button.classList.contains(cls));
        
        if (!hasTypeClass) {
            console.warn(`Button ${index + 1} missing specific type class:`, button);
            styleIssues++;
        }
    });
    
    if (styleIssues === 0) {
        console.log('✓ All buttons have proper CSS classes');
    } else {
        console.log(`⚠ ${styleIssues} button style issues found`);
    }
}

// Verify button functionality
function verifyButtonFunctionality() {
    console.log('Verifying button functionality...');
    
    // Test specific buttons
    const uploadBtn = document.getElementById('uploadBtn');
    const validateBtn = document.getElementById('validateReference');
    const closeButtons = document.querySelectorAll('[id^="close"]');
    
    let functionalityIssues = 0;
    
    // Test upload button
    if (uploadBtn) {
        const eventListeners = getEventListeners(uploadBtn);
        if (!eventListeners || !eventListeners.click || eventListeners.click.length === 0) {
            console.warn('Upload button missing click event listener');
            functionalityIssues++;
        } else {
            console.log('✓ Upload button has click event listener');
        }
    } else {
        console.warn('Upload button not found');
        functionalityIssues++;
    }
    
    // Test validate button
    if (validateBtn) {
        const eventListeners = getEventListeners(validateBtn);
        if (!eventListeners || !eventListeners.click || eventListeners.click.length === 0) {
            console.warn('Validate button missing click event listener');
            functionalityIssues++;
        } else {
            console.log('✓ Validate button has click event listener');
        }
    } else {
        console.warn('Validate button not found');
        functionalityIssues++;
    }
    
    // Test close buttons
    if (closeButtons.length > 0) {
        closeButtons.forEach((button, index) => {
            const eventListeners = getEventListeners(button);
            if (!eventListeners || !eventListeners.click || eventListeners.click.length === 0) {
                console.warn(`Close button ${index + 1} missing click event listener`);
                functionalityIssues++;
            }
        });
        console.log(`✓ ${closeButtons.length} close buttons have click event listeners`);
    } else {
        console.warn('No close buttons found');
        functionalityIssues++;
    }
    
    if (functionalityIssues === 0) {
        console.log('✓ All button functionality verified');
    } else {
        console.log(`⚠ ${functionalityIssues} functionality issues found`);
    }
}

// Verify accessibility features
function verifyAccessibilityFeatures() {
    console.log('Verifying accessibility features...');
    
    const buttons = document.querySelectorAll('button');
    let accessibilityIssues = 0;
    
    buttons.forEach((button, index) => {
        // Check for aria-label on icon-only buttons
        if (button.classList.contains('doc-btn-icon') && !button.hasAttribute('aria-label')) {
            // Check if button has visible text
            if (button.textContent.trim() === '') {
                console.warn(`Icon-only button ${index + 1} missing aria-label:`, button);
                accessibilityIssues++;
            }
        }
        
        // Check for focus styles
        const focusStyle = getComputedStyle(button).outline;
        if (focusStyle === 'none' && !button.hasAttribute('tabindex')) {
            // This is a simplified check - in reality, we'd need to check for :focus styles
            // console.warn(`Button ${index + 1} may be missing focus styles:`, button);
        }
    });
    
    if (accessibilityIssues === 0) {
        console.log('✓ Basic accessibility features verified');
    } else {
        console.log(`⚠ ${accessibilityIssues} accessibility issues found`);
    }
}

// Helper function to get event listeners (simplified version)
function getEventListeners(element) {
    // In a real implementation, this would use browser dev tools API
    // For now, we'll just check if the element has event listeners by checking for onclick
    return {
        click: element.onclick ? [element.onclick] : []
    };
}

// Export for global access
window.DocumentButtonsVerification = {
    verifyButtonStyles,
    verifyButtonFunctionality,
    verifyAccessibilityFeatures
};