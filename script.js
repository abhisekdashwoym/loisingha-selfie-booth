/* ========================================
   LOISINGHA COLLEGE SELFIE BOOTH - APP
   ======================================== */

// ============ STATE MANAGEMENT ============
const AppState = {
    currentScreen: 'homeScreen',
    stream: null,
    capturedImage: null,
    isCapturing: false,
    frameImage: null,
    logoImage: null,

    // Event Configuration
    eventName: '+2 First Year Induction Programme',
    collegeName: 'Loisingha College',
    eventYear: '2026'
};

// ============ DOM ELEMENTS ============
const Elements = {
    // Screens
    homeScreen: document.getElementById('homeScreen'),
    cameraScreen: document.getElementById('cameraScreen'),
    previewScreen: document.getElementById('previewScreen'),
    permissionScreen: document.getElementById('permissionScreen'),

    // Home Screen
    startCameraBtn: document.getElementById('startCameraBtn'),

    // Camera Screen
    cameraPreview: document.getElementById('cameraPreview'),
    frameOverlay: document.getElementById('frameOverlay'),
    captureBtn: document.getElementById('captureBtn'),
    backBtn: document.getElementById('backBtn'),
    retakeBtn: document.getElementById('retakeBtn'),
    countdownDisplay: document.getElementById('countdownDisplay'),
    countdownNumber: document.querySelector('.countdown-number'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    secondaryControls: document.getElementById('secondaryControls'),
    cameraControls: document.querySelector('.camera-controls'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    errorCloseBtn: document.getElementById('errorCloseBtn'),

    // Preview Screen
    previewCanvas: document.getElementById('previewCanvas'),
    downloadBtn: document.getElementById('downloadBtn'),
    retakeFinalBtn: document.getElementById('retakeFinalBtn'),
    downloadSuccess: document.getElementById('downloadSuccess'),
    previewLoading: document.getElementById('previewLoading'),

    // Toast
    toast: document.getElementById('toast')
};

// ============ SCREEN NAVIGATION ============
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const screen = document.getElementById(screenName);
    if (screen) {
        screen.classList.add('active');
        AppState.currentScreen = screenName;
    }
}

// ============ TOAST NOTIFICATIONS ============
function showToast(message, duration = 3000) {
    Elements.toast.textContent = message;
    Elements.toast.classList.add('show');

    setTimeout(() => {
        Elements.toast.classList.remove('show');
    }, duration);
}

// ============ ERROR HANDLING ============
function showError(message) {
    Elements.errorText.textContent = message;
    Elements.errorMessage.classList.remove('hidden');
    console.error(message);
}

function hideError() {
    Elements.errorMessage.classList.add('hidden');
}

// ============ CAMERA INITIALIZATION ============
async function initializeCamera() {
    showScreen('cameraScreen');
    Elements.loadingSpinner.classList.remove('hidden');

    try {
        // Request camera access
        const constraints = {
            video: {
                facingMode: 'user',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        };

        AppState.stream = await navigator.mediaDevices.getUserMedia(constraints);
        Elements.cameraPreview.srcObject = AppState.stream;

        // Wait for camera to be ready
        await new Promise(resolve => {
            Elements.cameraPreview.onloadedmetadata = resolve;
        });

        Elements.loadingSpinner.classList.add('hidden');
        Elements.cameraControls.classList.remove('hidden');
        showToast('Camera ready! 📸');

    } catch (error) {
        Elements.loadingSpinner.classList.add('hidden');
        
        if (error.name === 'NotAllowedError') {
            showScreen('permissionScreen');
            showToast('Camera permission denied');
        } else if (error.name === 'NotFoundError') {
            showError('No camera found on this device');
            showToast('Camera not found');
        } else {
            showError(`Camera error: ${error.message}`);
            showToast('Camera initialization failed');
        }
        console.error('Camera error:', error);
    }
}

// ============ CAMERA CLEANUP ============
function stopCamera() {
    if (AppState.stream) {
        AppState.stream.getTracks().forEach(track => track.stop());
        AppState.stream = null;
    }
    Elements.cameraPreview.srcObject = null;
}

// ============ COUNTDOWN TIMER ============
async function startCountdown() {
    return new Promise(resolve => {
        Elements.countdownDisplay.classList.remove('hidden');
        let count = 3;

        const interval = setInterval(() => {
            Elements.countdownNumber.textContent = count;
            count--;

            if (count < 0) {
                clearInterval(interval);
                Elements.countdownDisplay.classList.add('hidden');
                resolve();
            }
        }, 1000);
    });
}

// ============ CAPTURE PHOTO ============
async function capturePhoto() {
    if (AppState.isCapturing) return;
    AppState.isCapturing = true;
    Elements.captureBtn.disabled = true;

    try {
        // Start countdown
        await startCountdown();

        // Capture from video stream
        const canvas = document.createElement('canvas');
        canvas.width = Elements.cameraPreview.videoWidth;
        canvas.height = Elements.cameraPreview.videoHeight;

        const ctx = canvas.getContext('2d');
        
        // Flip for selfie
        ctx.scale(-1, 1);
        ctx.drawImage(Elements.cameraPreview, -canvas.width, 0, canvas.width, canvas.height);

        AppState.capturedImage = canvas.toDataURL('image/jpeg', 0.95);

        // Stop camera and show preview
        stopCamera();
        await processAndShowPreview();

    } catch (error) {
        showError(`Capture failed: ${error.message}`);
        console.error('Capture error:', error);
    } finally {
        AppState.isCapturing = false;
        Elements.captureBtn.disabled = false;
    }
}

// ============ PROCESS AND SHOW PREVIEW ============
async function processAndShowPreview() {
    Elements.previewLoading.classList.remove('hidden');
    showScreen('previewScreen');

    try {
        const canvas = Elements.previewCanvas;
        const ctx = canvas.getContext('2d');

        // Load images if not already loaded
        if (!AppState.frameImage) {
            AppState.frameImage = await loadImage('assets/frame.png');
        }
        if (!AppState.logoImage) {
            AppState.logoImage = await loadImage('assets/logo.png');
        }

        // Create high-resolution canvas (4x for better quality)
        const scale = 2;
        canvas.width = 1280 * scale;
        canvas.height = 720 * scale;

        ctx.scale(scale, scale);

        // Draw captured image
        const img = new Image();
        img.onload = async () => {
            ctx.drawImage(img, 0, 0, 1280, 720);

            // Draw frame overlay
            if (AppState.frameImage) {
                ctx.drawImage(AppState.frameImage, 0, 0, 1280, 720);
            }

            // Add logo in top-left corner
            if (AppState.logoImage) {
                const logoSize = 100;
                const padding = 20;
                ctx.drawImage(AppState.logoImage, padding, padding, logoSize, logoSize);
            }

            // Add text watermark
            addTextWatermark(ctx, 1280, 720);

            Elements.previewLoading.classList.add('hidden');
            showToast('Photo ready! 🎉');
        };

        img.onerror = () => {
            showError('Failed to process image');
            Elements.previewLoading.classList.add('hidden');
        };

        img.src = AppState.capturedImage;

    } catch (error) {
        showError(`Preview processing failed: ${error.message}`);
        Elements.previewLoading.classList.add('hidden');
        console.error('Preview error:', error);
    }
}

// ============ ADD TEXT WATERMARK ============
function addTextWatermark(ctx, width, height) {
    const padding = 30;
    const bottom = height - padding;

    // Set text properties
    ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, Segoe UI, Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.textAlign = 'right';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Add college name
    ctx.fillText(AppState.collegeName, width - padding, bottom - 40);

    // Add event name
    ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, Segoe UI, Arial';
    ctx.fillText(AppState.eventName, width - padding, bottom - 10);

    // Add date and time
    ctx.font = '16px -apple-system, BlinkMacSystemFont, Segoe UI, Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    const now = new Date();
    const timestamp = now.toLocaleString('en-IN');
    ctx.fillText(timestamp, width - padding, bottom + 20);
}

// ============ LOAD IMAGE ============
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.crossOrigin = 'anonymous';
        img.src = src;
    });
}

// ============ DOWNLOAD PHOTO ============
function downloadPhoto() {
    const canvas = Elements.previewCanvas;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    
    const now = new Date();
    const timestamp = now.getTime();
    link.download = `loisingha-selfie-${timestamp}.jpg`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    Elements.downloadSuccess.classList.remove('hidden');
    setTimeout(() => {
        Elements.downloadSuccess.classList.add('hidden');
    }, 3000);

    showToast('Photo downloaded! 📥');
}

// ============ RETAKE PHOTO ============
function retakePhoto() {
    AppState.capturedImage = null;
    Elements.cameraControls.classList.remove('hidden');
    Elements.secondaryControls.classList.add('hidden');
    initializeCamera();
}

// ============ EVENT LISTENERS ============

// Home Screen
Elements.startCameraBtn.addEventListener('click', initializeCamera);

// Camera Screen
Elements.captureBtn.addEventListener('click', capturePhoto);
Elements.backBtn.addEventListener('click', () => {
    stopCamera();
    showScreen('homeScreen');
});
Elements.retakeBtn.addEventListener('click', retakePhoto);
Elements.errorCloseBtn.addEventListener('click', hideError);

// Preview Screen
Elements.downloadBtn.addEventListener('click', downloadPhoto);
Elements.retakeFinalBtn.addEventListener('click', () => {
    showScreen('cameraScreen');
    Elements.cameraControls.classList.remove('hidden');
    Elements.secondaryControls.classList.add('hidden');
    initializeCamera();
});

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
    // Spacebar to capture
    if (e.code === 'Space' && AppState.currentScreen === 'cameraScreen') {
        e.preventDefault();
        capturePhoto();
    }

    // Escape to go back
    if (e.key === 'Escape' && AppState.currentScreen === 'cameraScreen') {
        stopCamera();
        showScreen('homeScreen');
    }
});

// ============ DEVICE ORIENTATION ============
window.addEventListener('orientationchange', () => {
    if (AppState.currentScreen === 'cameraScreen') {
        // Reinitialize camera on orientation change
        stopCamera();
        setTimeout(() => {
            initializeCamera();
        }, 500);
    }
});

// ============ PAGE VISIBILITY ============
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Stop camera when tab is hidden
        if (AppState.stream) {
            stopCamera();
        }
    }
});

// ============ CLEANUP ON PAGE UNLOAD ============
window.addEventListener('beforeunload', () => {
    stopCamera();
});

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    console.log('Loisingha College Selfie Booth v1.0 - Ready! 📸');
    
    // Check camera support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showError('Your browser does not support camera access. Please use Chrome, Firefox, Safari, or Edge.');
    }
});

// ============ SERVICE WORKER REGISTRATION ============
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // Service worker registration is optional
    });
}